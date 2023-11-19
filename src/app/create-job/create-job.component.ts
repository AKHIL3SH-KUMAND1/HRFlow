import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-create-job',
  templateUrl: './create-job.component.html',
  styleUrls: ['./create-job.component.css']
})
export class CreateJobComponent {
  jobForm = new FormGroup({
    jobId:new FormControl((self.crypto.randomUUID()).toString().split("-")[0],Validators.required),
    managerId:new FormControl(JSON.parse(sessionStorage.getItem("userData") as string).user.userId,Validators.required),
    role: new FormControl('',Validators.required),
    dept: new FormControl('',Validators.required),
    description: new FormControl('',Validators.required),
    applicants:new FormControl(<any>[],Validators.required)
  })

  jobs!:any[];
  manager = JSON.parse(sessionStorage.getItem("userData") as string).user;
  constructor(private userService:UserService){
    this.fetchJobs();
  }

  createJob(){
    this.userService.createJob(this.jobForm.value).subscribe(data=>{
      console.log(data);
      this.fetchJobs();
    })
  }

  fetchJobs(){
    this.userService.getJobsByManagerId(this.manager.userId).subscribe(data=>{
      console.log(data);
      this.jobs = data;
    })
  }

  deleteJob(jobId:string){
    this.userService.deleteJob(jobId).subscribe(data=>{
      console.log(data);
    })
  }

  approve(applicantId:string){
    
  }
}
