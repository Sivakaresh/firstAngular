import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from '../model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private loginUrl="http://localhost:8080/hrm_system/login";
  constructor(private http:HttpClient) { }

  getLogin():Observable<Login[]>{
    return this.http.get<Login[]>(this.loginUrl)
  }
}
