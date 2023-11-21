import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  hide = true;

  registrationForm = this.fb.group({
    userId: [(self.crypto.randomUUID()).toString().split("-")[0], Validators.required],
    username: ['', [Validators.required, Validators.pattern(/^[a-zA-Z0-9_-]{3,20}$/)]],
    password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]],
    firstName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    lastName: ['', [Validators.required, Validators.pattern(/^[a-zA-Z]+$/)]],
    dateOfBirth: ['', Validators.required],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    email: ['', [Validators.required, Validators.email]],
    dept: ['', Validators.required],
    approved: [false, Validators.required],
    employeeList: [<string[]>[]],
    managerList:[<string[]>[]]
  });

  submitted: boolean = true;
  params = "Manager";
  constructor(private activatedRoute:ActivatedRoute,private fb: FormBuilder, private userService: UserService, private router: Router) { }
  showPassword = true;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(param=>{
      this.params = param['type'];
    })
  }

  get f() { return this.registrationForm.controls; }

  onSubmit(): void {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registrationForm.invalid) {
      return;
    }


    console.log(this.registrationForm.value)
    if(this.params === "Manager"){
      let {managerList,...manager} = this.registrationForm.value;
    this.userService.addManager(manager).subscribe(
      response => {
        console.log('User added!', response);
        window.alert('You have successfully registered!');
        this.router.navigate(['/login']);
      },
      error => console.log('Error!', error)
    );
    }else{
      let {employeeList,...admin} = this.registrationForm.value;
      this.userService.addAdmin(admin).subscribe(
        response => {
          console.log('User added!', response);
          window.alert('You have successfully registered!');
          this.router.navigate(['/login']);
        },
        error => console.log('Error!', error)
      );
    }
  }

  getTooltipMessage(): string {
    if (this.registrationForm.valid) {
      return ''; // Empty string means no tooltip
    }
    return 'Please fill in all required fields.';

  }
  passwordHidden = true;
  togglePasswordVisibility() {
    this.passwordHidden = !this.passwordHidden;
  }

  get username() {
    return this.registrationForm.get('username');
  }

  get password() {
    return this.registrationForm.get('password');
  }

  get firstName() {
    return this.registrationForm.get('firstName');
  }

  get lastName() {
    return this.registrationForm.get('lastName');
  }

  get phoneNumber() {
    return this.registrationForm.get('phoneNumber');
  }

  get email() {
    return this.registrationForm.get('email');
  }

  get dept() {
    return this.registrationForm.get('dept');
  }


}
