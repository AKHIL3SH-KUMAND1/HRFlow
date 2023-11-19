import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from 'src/models/management-model';
  @Injectable({
  providedIn: 'root'
})
export class UserService {
 
  constructor(private http: HttpClient) { }
 
  addEmployee(employee: any) {
    return this.http.post('http://localhost:8080/employees', employee,{responseType:'text'});
  }

  addManager(manager:any){
    return this.http.post('http://localhost:8080/managers',manager,{responseType:'text'});
  }

  addAdmin(admin:any){
    return this.http.post('http://localhost:8080/hrAdminstrators',admin,{responseType:'text'});
  }

  getEmployee(username:string){
    return this.http.get<any>(`http://localhost:8080/employees/username/${username}`)
  }

  getManager(username:string){
    return this.http.get<any>(`http://localhost:8080/managers/username/${username}`)
  }

  getAdmin(username:string){
    return this.http.get<any>(`http://localhost:8080/hrAdminstrators/username/${username}`)
  }

  getSuper(username:string){
    return this.http.get<any>(`http://localhost:8080/super/username/${username}`)
  }
 
  employeeLogin(user: any) {
    return this.http.post<any>('http://localhost:8080/employees/login', user);
  }

  managerLogin(user:any){
    return this.http.post<any>('http://localhost:8080/managers/login',user);
  }
  adminLogin(user:any){
    return this.http.post<any>('http://localhost:8080/hrAdminstrators/login',user);
  }
  superLogin(user:any){
    return this.http.post<any>('http://localhost:8080/super/login',user);
  }

  setSessionStorage(user:any,role:string){
    sessionStorage.setItem("userData",JSON.stringify({user:user,role:role}));
  }

  onboardEmployee(userId:string){
    return this.http.get(`http://localhost:8080/employees/${userId}/approve`)
  }

  getJobsByManagerId(managerId:string){
    return this.http.get<any[]>(`http://localhost:8080/jobs/${managerId}`);
  }

  fetchAllJobs(){
    return this.http.get<any[]>('http://localhost:8080/jobs');
  }

  addApplicantToJob(jobId:string,applicant:any){
    return this.http.put(`http://localhost:8080/jobs/${jobId}`,applicant);
  }

  deleteJob(jobId:string){
    return this.http.delete(`http://localhost:8080/jobs/${jobId}`)
  }

  createJob(payload:any){
    return this.http.post('http://localhost:8080/jobs',payload);
  }

  updateEmployee(payload:any){
    return this.http.put(`http://localhost:8080/employees/edit/${payload.userId}`,payload);
  }

  removeSessionStorage(){
    sessionStorage.clear();
  }

  fetchEmployeeAttendanceData(employeeId:string){
    return  this.http.get<any[]>(`http://localhost:8080/employees/${employeeId}/attendance`)
  }



  markEmployeeAttendance(employeeId:string,data:any){
    console.log(data);
    return this.http.post(`http://localhost:8080/employees/${employeeId}/mark-attendance`, data);
  }
 

}