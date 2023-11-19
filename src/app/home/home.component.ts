import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { UserService } from 'src/shared/services/user.service';
import { AddApplicantToJobDialogComponent } from '../add-applicant-to-job-dialog/add-applicant-to-job-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  jobs!:any[];
  constructor(private userService:UserService, private dialog: MatDialog){
    this.setJobs();
  }

  setJobs(){
    this.userService.fetchAllJobs().subscribe(data=>{
      this.jobs = data;
    })
  }

  openDialog(job:any){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "800px";
    dialogConfig.height = "400px";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.restoreFocus = true;
    dialogConfig.data = {
      jobData: job,
    }
    const dialogRef = this.dialog.open(AddApplicantToJobDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        console.log(data)

        let {skillsList,certificationList,...payload} = data;
        this.userService.addApplicantToJob(job.jobId,payload).subscribe(data=>{
          console.log(data);
        })
      }
    );
  }
}
