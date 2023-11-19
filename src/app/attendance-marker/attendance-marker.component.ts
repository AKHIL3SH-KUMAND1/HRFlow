import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import {
  MatSnackBar
} from '@angular/material/snack-bar';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { UserService } from 'src/shared/services/user.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, MatSortHeader } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-attendance-marker',
  templateUrl: './attendance-marker.component.html',
  styleUrls: ['./attendance-marker.component.css']
})
export class AttendanceMarkerComponent implements OnInit {
  employeeId!: string;
  attendanceList!: any[]; 
  minDate = new Date();
  selectedDate = new Date();
  hoursWorked = new FormControl(9,Validators.required);
  hours = [0,1,2,3,4,5,6,7,8,9,10,11,12];
  displayedColumns: string[] = ['date', 'status', 'hoursWorked'];
  pageIndex:number = 0;
  pageSize: number = 5;
  displayedRows!: any[];


  constructor(private http: HttpClient,private _snackBar: MatSnackBar,private userService:UserService) {
    this.employeeId = (JSON.parse(sessionStorage.getItem("userData") as string) as any).user.userId 
    this.fetchAttendanceData();
  }


  ngOnInit(): void {
    console.log(this.employeeId)
    this.displayRows();
  }

  displayRows() {
    console.log("called")
    this.displayedRows = [];
    for (let i = (this.pageIndex * this.pageSize); i < (this.pageIndex + 1) * this.pageSize && i < this.attendanceList.length; i++){
      this.displayedRows.push(this.attendanceList[i]);
    }
    console.log(this.displayedRows)
  }


  handlePageChange(event: PageEvent) {
    console.log('Page event:', event);
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.displayRows();
  }

  getSevenDaysBeforeDate():Date{
    const sevenDaysBeforeDate = new Date(this.minDate);
    sevenDaysBeforeDate.setDate(this.minDate.getDate()-7);
    return sevenDaysBeforeDate;
  }

  fetchAttendanceData() {
      this.userService.fetchEmployeeAttendanceData(this.employeeId).subscribe(data => {
        this.attendanceList = data.sort(function(a,b){
          // console.log(a.date,b.date);
          return a.date < b.date?1:-1;
        });
        this.displayRows();
      });
  }
  onDateChange(event: any) {
    this.selectedDate = event.value as Date;
  }
  markAttendance() {
    const selectedDate = this.formatDate(this.selectedDate);

    let hours = this.hoursWorked.value==null?0:this.hoursWorked.value;
    console.log(hours);
    
      this.userService.markEmployeeAttendance(this.employeeId,{ date: selectedDate,status : ((hours >0)?"present":"absent"),hoursWorked:hours.toString() }).subscribe(data => {
        console.log('Attendance marked successfully');
        this.openSnackBar('Attendance marked successfully');
        this.fetchAttendanceData(); // Refresh the attendance data after marking
      },
      error=>{
        console.log('Attendance failed');
        this.openSnackBar("Attendance already exists");
        this.fetchAttendanceData();
      }
      );

  }
  openSnackBar(messageParam:string) {
    this._snackBar.open(messageParam);
    setTimeout(()=>{
      this._snackBar.dismiss();
    },2000)
    
  }

  markHoursWorked(){
    this.hoursWorked.setValue(0);
  }


  private formatDate(date: Date): string {
    const year = date.getFullYear();
    const month = date.getMonth() + 1; // Months are zero-based
    const day = date.getDate();
    return `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  }

}
