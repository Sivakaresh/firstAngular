import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Department} from '../model/department';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})

export class DepartmentService {

  constructor(private http:HttpClient) { }

  private deptUrl="http://localhost:8080/hrm_system/department";

  public getAllDept(){
    return this.http.get<Department[]>(this.deptUrl);
  }

  public addDept(dept){
    return this.http.post<Department>(this.deptUrl,dept);
  }

  public deleteDept(dept){
    return this.http.delete<Department>(this.deptUrl+"/"+dept.id);
  }

  public updateDept(dept){
    return this.http.put<Department>(this.deptUrl,dept);
  }
}
