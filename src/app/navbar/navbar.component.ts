import { Component, TemplateRef } from '@angular/core';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from 'src/shared/services/user.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {  
  closeResult:string="";
  user:any = null
  role=""
  public isCollapsedSignup = true;
  public isCollapsedSignin = true;
  constructor(private offcanvasService:NgbOffcanvas,private userService:UserService){
    this.setUser()
    console.log(this.role);

  }
  openCustomBackdropClass(content: TemplateRef<any>) {
		this.offcanvasService.open(content, { backdropClass: 'bg-secondary' });
    if(sessionStorage.getItem("userData")!=null){
    this.setUser()
    }
    console.log(this.role);
	}

  setUser(){
    if(sessionStorage.getItem("userData")!=null){
      this.user = JSON.parse(sessionStorage.getItem("userData") as string).user;
    }
    if(sessionStorage.getItem("userData")!=null){
    this.role = JSON.parse(sessionStorage.getItem("userData") as string).role;
    }
  }

  logout(){
    this.userService.removeSessionStorage();
    this.user = sessionStorage.getItem("userData");
  }

}
