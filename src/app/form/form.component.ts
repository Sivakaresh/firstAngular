import { Component, OnInit } from '@angular/core';
import {DepartmentService} from '../service/department.service';
import{Department} from '../model/department';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  dept : Department[];

  deptObj = new Department();
  
  constructor(private departmentService:DepartmentService) { }

  ngOnInit() {
    this.getDepartment();
  }

  clearObj(){
    this.deptObj.id = null;
    this.deptObj.departmentName = "";
  }

  getDepartment(){
     this.departmentService.getAllDept().subscribe(data=>{
      this.dept = data;
      console.log(data);
    });
  }

  addDepartment(){
    this.departmentService.addDept(this.deptObj).subscribe(data=>{
      console.log(this.deptObj);
      alert("Department Added!");
      this.getDepartment();
      
    })
  }

  deleteDepartment(){
   return this.departmentService.deleteDept(this.deptObj).subscribe(data=>{
      console.log(data);
      this.getDepartment();
    })
  }

  dltDept(test){
    this.deptObj = Object.assign({},test);
   
  }

  editDept(test){
    this.deptObj = Object.assign({},test);
  }

  updateDepartment(){
    this.departmentService.updateDept(this.deptObj).subscribe(data=>{
      console.log(this.deptObj);
      alert("Department update!");
      this.getDepartment();
      
    })
  }
}
