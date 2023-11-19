import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { AttendanceMarkerComponent } from './attendance-marker/attendance-marker.component';
import { CourserouteService } from 'src/shared/services/courseroute.service';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ManagerGuardService } from 'src/shared/services/manager-guard.service';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:'Signin/:type',
    component:SigninComponent
  },
  {
    path:"Signup/:type",
    component:SignupComponent
  },
  {
    path:"Employee/Attendance",
    component:AttendanceMarkerComponent,
    canActivate:[CourserouteService]
  },
  {
    path:"Employee/Profile",
    component:EmployeeProfileComponent,
    canActivate:[CourserouteService]
  },
  {
    path:"Employee/Onboarding",
    component:OnboardingComponent,
    canActivate:[CourserouteService]
  },
  {
    path:"Manager/CreateJob",
    component:CreateJobComponent,
    canActivate:[ManagerGuardService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
