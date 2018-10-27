import { Component, OnInit, Output} from '@angular/core';
import { EventEmitter } from 'events';
import { Login } from '../model/login';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login:Login[];

  @Output() public childEvent = new EventEmitter();
  constructor( private loginService :LoginService) { }

  ngOnInit() {
    this.loginService.getLogin().subscribe(data=>{
      this.login=data;
    })
  }

  fireEvent(){
    // this.childEvent.emit("hi");
      
  }

}
