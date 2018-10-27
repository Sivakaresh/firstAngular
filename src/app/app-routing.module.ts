import { NgModule } from '@angular/core';

import {RouterModule ,Routes} from '@angular/router';
import { FormComponent } from './form/form.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

const routes:Routes=[
  { path:'form',component: FormComponent},
  { path:'leave', component: LeaveComponent},
  {path:"login", component: LoginComponent},
  {path:"role", component:RoleComponent},
  {path:"user", component:UserComponent}
  
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],exports:[
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
