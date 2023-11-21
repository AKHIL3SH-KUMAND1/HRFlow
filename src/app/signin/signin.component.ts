import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  user = { username: '', password: '' };
  errorMessage: string = '';
  type!: string;

  constructor(private activatedRoute: ActivatedRoute, private userService: UserService, private router: Router) {
    activatedRoute.params.subscribe(param => {
      this.type = param['type'];
    })
  }

  onSubmit(): void {
    if (this.type === "Employee") {
      this.userService.employeeLogin(this.user).subscribe(
        data => {
          console.log('Login successful', data);
          // let userData;
          this.userService.getEmployee(data['message']).subscribe(userData=>{
            this.userService.setSessionStorage(userData,"employee");
          })
          // this.userService.setSessionStorage(this.userService.getEmployee(data['message']),"employee");
          this.errorMessage = '';
          this.router.navigate(['/']);
        },
        error => {
          console.log('Error', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
    }
    if (this.type === "Manager") {
      this.userService.managerLogin(this.user).subscribe(
        data => {
          console.log('Login successful', data);
          this.userService.getManager(data['message']).subscribe(userData=>{
            this.userService.setSessionStorage(userData,"manager");
          })
          this.errorMessage = '';
          this.router.navigate(['/']);
        },
        error => {
          console.log('Error', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
    }
    if (this.type === "Admin") {
      this.userService.adminLogin(this.user).subscribe(
        data => {
          console.log('Login successful', data);
          this.userService.getAdmin(data['message']).subscribe(userData=>{
            this.userService.setSessionStorage(userData,"admin");
          })
          this.errorMessage = '';
          this.router.navigate(['/']);
        },
        error => {
          console.log('Error', error);
          this.errorMessage = 'Invalid username or password';
        }
      );
    }
    if (this.type === "Super") {
      if(this.user.username === "SuperAdmin")
      {
        if(this.user.password === "Admin123&"){
          this.userService.setSessionStorage(this.user,"super");
        }
      }
    }

  }
  passwordHidden: any;
  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }
}
