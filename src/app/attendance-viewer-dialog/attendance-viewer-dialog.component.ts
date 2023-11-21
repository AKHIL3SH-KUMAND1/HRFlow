import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-attendance-viewer-dialog',
  templateUrl: './attendance-viewer-dialog.component.html',
  styleUrls: ['./attendance-viewer-dialog.component.css']
})
export class AttendanceViewerDialogComponent {
  attendanceList!:any[]
  displayedColumns: string[] = ['date', 'status', 'hoursWorked'];
  pageIndex:number = 0;
  pageSize: number = 5;
  displayedRows!: any[];
  constructor(private dialogRef: MatDialogRef<AttendanceViewerDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){
      console.log(data.employeeData)
      this.attendanceList = data.employeeData.attendanceList||<any[]>[]
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

    close(){
      this.dialogRef.close();
    }
}
