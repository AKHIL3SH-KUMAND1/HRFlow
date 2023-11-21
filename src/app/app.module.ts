import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from 'src/modules/material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapModule } from 'src/modules/bootstrap/bootstrap.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AttendanceMarkerComponent } from './attendance-marker/attendance-marker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { EmployeeProfileComponent } from './employee-profile/employee-profile.component';
import { OnboardingComponent } from './onboarding/onboarding.component';
import { CreateJobComponent } from './create-job/create-job.component';
import { ViewEmployeesComponent } from './view-employees/view-employees.component';
import { AddApplicantToJobDialogComponent } from './add-applicant-to-job-dialog/add-applicant-to-job-dialog.component';
import { ApproveUserDialogComponent } from './approve-user-dialog/approve-user-dialog.component';
import { AttendanceViewerDialogComponent } from './attendance-viewer-dialog/attendance-viewer-dialog.component';
import { ManagerProfileComponent } from './manager-profile/manager-profile.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { ViewManagersComponent } from './view-managers/view-managers.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SigninComponent,
    SignupComponent,
    AttendanceMarkerComponent,
    SnackbarComponent,
    EmployeeProfileComponent,
    OnboardingComponent,
    CreateJobComponent,
    ViewEmployeesComponent,
    AddApplicantToJobDialogComponent,
    ApproveUserDialogComponent,
    AttendanceViewerDialogComponent,
    ManagerProfileComponent,
    AdminProfileComponent,
    ViewManagersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BootstrapModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule  ,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
