import { Component,Inject } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'app-add-applicant-to-job-dialog',
  templateUrl: './add-applicant-to-job-dialog.component.html',
  styleUrls: ['./add-applicant-to-job-dialog.component.css']
})
export class AddApplicantToJobDialogComponent {
  form = new FormGroup({
    applicantId: new FormControl(self.crypto.randomUUID().toString().split("-")[0],Validators.required),
    firstName : new FormControl('',Validators.required),
    lastName : new FormControl('',Validators.required),
    dateOfBirth : new FormControl(null,Validators.required),
    phoneNumber : new FormControl(null,Validators.required),
    skills : new FormControl(<string[]>[]),
    certifications : new FormControl(<string[]>[]),
    careerObjective : new FormControl('',Validators.required),
    email :  new FormControl('',[Validators.required,Validators.email]),
    skillsList: new FormControl('',Validators.required),
    certificationList : new FormControl('',Validators.required)
  })
  

  constructor(private fb:FormBuilder,private dialogRef: MatDialogRef<AddApplicantToJobDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any){
      console.log(data)
     
    }

    add(){
      this.form.value.skills = this.form.value.skillsList?.split(",");
      this.form.value.certifications = this.form.value.certificationList?.split(",");
      this.dialogRef.close(this.form.value)
    }

    close(){
      this.dialogRef.close()
    }

    get skills(): FormArray {
      return this.form.get('skills') as FormArray;
    }

    addSkill(): void {
      this.skills.push(this.fb.control('', Validators.required));
    }
  
    // Remove a skill control from the skills FormArray
    removeSkill(index: number): void {
      this.skills.removeAt(index);
    }
}
