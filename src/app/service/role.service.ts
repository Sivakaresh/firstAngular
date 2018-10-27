import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import{Role} from '../model/role';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http:HttpClient) { }

  private roleUrl ="http://localhost:8080/hrm_system/role";

  public getAllRoles(){
    return this.http.get<Role[]>(this.roleUrl);
  }

  public createRole(role){
    return this.http.post<Role>(this.roleUrl,role);
  }

  public deleteRole(role){
    return this.http.delete<Role>(this.roleUrl+ "/" +role.id);
  }

  public updateRole(role){
    return this.http.put<Role>(this.roleUrl+ "/" +role.id,role);
  }
}
