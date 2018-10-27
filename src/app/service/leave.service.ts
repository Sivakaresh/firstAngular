import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Leave } from '../model/leave';


const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private http:HttpClient) { }

  private leaveUrl="http://localhost:8080/hrm_system/leave/1";

  public getAllLeave(){
    return this.http.get<Leave[]>(this.leaveUrl);
  }
}
