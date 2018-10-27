import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user : User[];
  userObj =new User();
  constructor( private userService:UserService) { }

  ngOnInit() {
    this.getUser();
  }


  getUser(){
    this.userService.getAllUser().subscribe(data=>{
      this.user = data;
      console.log(data);
    })
  }

  addUser(){
    this.userService.createUser(this.userObj).subscribe(data=>{
      console.log(data);
      alert("A user added");
      this.getUser();
    })
  }
  editUser(){
    this.userService.updateUser(this.userObj).subscribe(data=>{
      console.log(data);
      alert("successfully edited");
      this.getUser();
    })
  }

  dltUser(){
    this.userService.deleteUSer(this.userObj).subscribe(data=>{
      alert("deleted");
      this.getUser();
    })
  }

  getId(user){
    this.userObj=Object.assign({},user);
  }
}
