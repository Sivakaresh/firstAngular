import { Component, OnInit } from '@angular/core';
import {RoleService} from '../service/role.service';
import{Role} from '../model/role';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {

  title = 'firstAngular';
  roles: Role[];
  roleObj = new Role();
  deleteRoleObj = Role;
  constructor(private roleService:RoleService){}

  ngOnInit(){
    this.getRole();
  }
  clearObj(){
    this.roleObj.id = null;
    this.roleObj.roleName = "";
  }

  getRole(){
    this.roleService.getAllRoles().subscribe(data=>{
      this.roles = data;
      console.log(data);
    });
   }

   createRole(){
     return this.roleService.createRole(this.roleObj).subscribe(data=>{
       console.log(data);
       alert("role created");
       this.getRole();
     });
   }

    updateRole(){
      return this.roleService.updateRole(this.roleObj).subscribe(data=>{
        console.log(data);
        alert("Role Updated");
        this.getRole();
      });
    }

    deleteRole(role){
  
      // if(window.confirm('Are sure you want to delete this item ?')){
      //   return this.roleService.deleteRole(role).subscribe(data=>{
      //     console.log(data);
      //     this.getRole();
      //   });
       
      //  }
       return this.roleService.deleteRole(this.roleObj).subscribe(data=>{
        console.log(data);
        this.getRole();
      })

    }

    editRole(role){
      this.roleObj = Object.assign({},role);
    }

}

