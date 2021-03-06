import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../model/user';

const httpOptions = {
  headers : new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http:HttpClient) { }
  private userUrl="http://localhost:8080/hrm_system/user";

  public getAllUser(){
    return this.http.get<User[]>(this.userUrl);
  }

  public createUser(user){
    return this.http.post<User>(this.userUrl,user);
  }

  public deleteUSer(user){
    return this.http.delete<User>(this.userUrl+"/"+user.id);
  }

  public updateUser(user){
    return this.http.put<User>(this.userUrl+"/"+user.id,user)
  }
}
