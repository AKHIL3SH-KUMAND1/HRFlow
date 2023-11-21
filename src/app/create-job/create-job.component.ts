import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';
import { ApproveUserDialogComponent } from '../approve-user-dialog/approve-user-dialog.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {
  jobForm = new FormGroup({
    jobId: new FormControl((self.crypto.randomUUID()).toString().split("-")[0], Validators.required),
    managerId: new FormControl(JSON.parse(sessionStorage.getItem("userData") as string).user.userId, Validators.required),
    role: new FormControl('', Validators.required),
    dept: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    applicants: new FormControl(<any>[], Validators.required)
  })

  jobs!: any[];
  manager = JSON.parse(sessionStorage.getItem("userData") as string).user;
  constructor(private userService: UserService, private dialog: MatDialog) {
    this.fetchJobs();
  }

  createJob() {
    this.userService.createJob(this.jobForm.value).subscribe(data => {
      console.log(data);
      this.fetchJobs();
    })
  }

  fetchJobs() {
    this.userService.getJobsByManagerId(this.manager.userId).subscribe(data => {
      console.log(data);
      this.jobs = data;
    })
  }

  deleteJob(jobId: string) {
    this.userService.deleteJob(jobId).subscribe(data => {
      console.log(data);
    })
    this.fetchJobs()
  }



  approve(applicant: any,jobId:string) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = "500px";
    dialogConfig.height = "400px";
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.restoreFocus = true;
    dialogConfig.data = {
      jobId
    }
    const dialogRef = this.dialog.open(ApproveUserDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(
      data => {
        let { applicantId,skills,certifications,careerObjective, ...applicantdata } = applicant;
        let employee = { ...applicantdata, userId: applicantId, leaves: null, approved: true, onboarded: false, attendanceList: [], dept: data.dept, username: data.username, password: data.password };
        this.userService.addEmployee(employee).subscribe(data=>{
          
        });
        this.userService.addEmployeeToManager(this.manager.userId,employee.userId).subscribe(response=>{

        })
        emailjs.init('TS5BALlxrihtML0ed');
        emailjs.send("service_9c6ldbf","template_7a9rev4",{
          managerId: this.manager.userId,
          jobId: data.jobId,
          firstName: applicant.firstName,
          username: data.username,
          password: data.password,
          email: applicant.email,
          });
          window.alert("Mail sent to applicant");
          this.deleteJob(jobId);
      }
    );
  }
}
