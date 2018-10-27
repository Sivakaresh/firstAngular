import { Component, OnInit } from '@angular/core';
import { LeaveService } from '../service/leave.service';
import { Leave } from '../model/leave';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})


export class LeaveComponent implements OnInit {

  leave:Leave[];
  leaveObj = new Leave();
  constructor( private leaveService:LeaveService) { }

  ngOnInit() {
    this.getLeave();
  }

  getLeave(){
    this.leaveService.getAllLeave().subscribe(det=>{
      this.leave=det;
      console.log(det);
    });
  }
}
