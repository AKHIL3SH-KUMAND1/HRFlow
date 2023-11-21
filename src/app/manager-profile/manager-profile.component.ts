import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/shared/services/user.service';
@Component({
  selector: 'app-manager-profile',
  templateUrl: './manager-profile.component.html',
  styleUrls: ['./manager-profile.component.css']
})
export class ManagerProfileComponent {
  userProfile!: any;
  tempProfile!: any;
  isEditing = false
  editForm: FormGroup;
  newDate!:string
  constructor(private userService: UserService, private fb: FormBuilder, private router: Router) {
    this.setUserProfile();
    console.log(this.userProfile);
    this.editForm = this.fb.group({
      firstName: [null,Validators.required],
      lastName: [null,Validators.required],
      email: [null, Validators.email],
      phoneNumber: [null,Validators.required],
      dateOfBirth: ['',Validators.required],
      password: [null,Validators.required]
    });
    this.newDate = (new Date(this.userProfile.dateOfBirth.toString())).toLocaleDateString()

    // Populate the form with initial values
    this.editForm.patchValue({
      firstName: this.userProfile.firstName,
      lastName: this.userProfile.lastName,
      email: this.userProfile.email,
      phoneNumber: this.userProfile.phoneNumber,
      dateOfBirth: this.newDate,
      password: this.userProfile.password
    });
  }

  setUserProfile() {
    this.userProfile = JSON.parse(sessionStorage.getItem("userData") as string).user;
    this.tempProfile = this.userProfile;
  }

  toggleEditMode() {
    this.isEditing = !this.isEditing;
    console.log(this.editForm.value)

    if (this.isEditing === false) {
      this.tempProfile.firstName = this.editForm.value.firstName;
      this.tempProfile.lastName = this.editForm.value.lastName;
      this.tempProfile.email = this.editForm.value.email;
      this.tempProfile.phoneNumber = this.editForm.value.phoneNumber;
      this.tempProfile.password = this.editForm.value.password;
      this.tempProfile.dateOfBirth = this.editForm.value.dateOfBirth;
      console.log(this.tempProfile)
      this.userService.updateManager(this.tempProfile,this.userProfile.userId).subscribe(data => {
        console.log(data);
        this.userService.getManager(this.userProfile.username).subscribe(data=>{
            console.log(data);
            this.userService.setSessionStorage(data,"manager");
            this.setUserProfile();
        })
      })
    }
    this.setUserProfile();
    this.reloadPage();
  }

  reloadPage() {
    this.router.navigate([this.router.url]);
  }
}
