import { Component } from '@angular/core';
import { UserService } from 'src/shared/services/user.service';
import { AttendanceMarkerComponent } from '../attendance-marker/attendance-marker.component';
import { AttendanceViewerDialogComponent } from '../attendance-viewer-dialog/attendance-viewer-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.css']
})
export class ViewEmployeesComponent {
  employeeList!:any[]
  handler!:string
  constructor(private userService:UserService,private dialog:MatDialog,private router:Router){
    this.fetchEmployees();
    this.handler = (this.router.url.toString()[1]=='A')?"Admin":"Manager";

  }

  fetchEmployees(){
    this.userService.fetchAllEmployees().subscribe(data=>{
      this.employeeList = data;
      console.log(this.employeeList);
    })
  }

  viewAttendance(employee:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height = "450px";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.restoreFocus = true;
    dialogConfig.data = {
      employeeData:employee
    }
    const dialogRef = this.dialog.open(AttendanceViewerDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe()
  }

  remove(employee:any){
    
    this.userService.deleteEmployee(employee.userId).subscribe(data=>{
      console.log(data);
      emailjs.init('TS5BALlxrihtML0ed');
      emailjs.send("service_9c6ldbf","template_vjtn8de",{
        email: employee.email,
        reply_to: "",
        firstName: employee.firstName,
        });
        this.fetchEmployees();

    })
  }




}
