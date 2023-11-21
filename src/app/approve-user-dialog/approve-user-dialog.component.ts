import { Component, Inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-approve-user-dialog',
  templateUrl: './approve-user-dialog.component.html',
  styleUrls: ['./approve-user-dialog.component.css']
})
export class ApproveUserDialogComponent {
  form = new FormGroup({
    username : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),
    dept : new FormControl('',Validators.required),
    jobId : new FormControl('')
  })
  constructor(private dialogRef: MatDialogRef<ApproveUserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data:any){
      console.log(data)
      this.form.value.jobId = data.jobId;
    }


  //onclick function to close the dialog as well as send the form data to the dialogref
  add(){
    this.dialogRef.close(this.form.value)
  }

  //onclick function to close the dialog without sending any data
  close(){
    this.dialogRef.close()
  }
}
