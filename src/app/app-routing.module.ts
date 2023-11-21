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
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminGuardService } from 'src/shared/services/admin-guard.service';

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
  },
  {
    path:"Manager/Employees",
    component:ViewEmployeesComponent,
    canActivate:[ManagerGuardService]
  },
  {
    path:"Manager/Profile",
    component:ManagerProfileComponent,
    canActivate:[ManagerGuardService]
  },
  {
    path:"Admin/Profile",
    component:AdminProfileComponent,
    canActivate:[AdminGuardService]
  },
  {
    path:"Admin/Employees",
    component:ViewEmployeesComponent,
    canActivate:[AdminGuardService]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
