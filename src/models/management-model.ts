export interface Applicant{
    applicantId:string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    phoneNumber:string,
    email:string,
    skills:Array<string>,
    certifications:Array<string>,
    careerObjective:string,
}

export interface Attendance{
    attendanceId:string,
    employeeId:string,
    clockIn:string,
    clockOut:string,
    hoursWorked:string,
    status:string
}

export interface Leave{
    sickLeave:Array<string>,
    earnedLeave:Array<string>,
    casualLeave:Array<string>
}

export interface Employee{
    userId:string,
    username:string,
    password:string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    phoneNumber:string,
    email:string,
    dept:string,
    approved:boolean,
    leaves:Leave
}

export interface Manager{
    userId:string,
    username:string,
    password:string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    phoneNumber:string,
    email:string,
    dept:string,
    approved:boolean,
    employeeList:Array<Employee>
}

export interface HrAdminstrator{
    userId:string,
    username:string,
    password:string,
    firstName:string,
    lastName:string,
    dateOfBirth:string,
    phoneNumber:string,
    email:string,
    dept:string,
    approved:boolean,
    managerList:Array<Manager>
}

export interface Job{
    jobId:string,
    managedBy:string,
    role:string,
    dept:string,
    description:string,
    applicants:Array<Applicant>
}

export interface EmployeePerformance{
    performanceId:string,
    forEmployee:string,
    attitude:number,
    timeliness:number,
    integrity:number,
    softSkills:number,
    intent:number
}