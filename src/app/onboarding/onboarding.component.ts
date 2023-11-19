import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  user!:any;
  constructor(private _formBuilder: FormBuilder,private userService:UserService) {
    this.setUser();
  }

  setUser(){
    this.user = JSON.parse(sessionStorage.getItem("userData") as string).user;

  }


  onboardEmployee(){
    this.userService.onboardEmployee(this.user.userId).subscribe(data=>{
      this.userService.setSessionStorage(data,"employee");
    });
  }
 
}

