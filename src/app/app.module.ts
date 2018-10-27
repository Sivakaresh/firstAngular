import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import {RoleService} from './service/role.service';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { NavigationPaneComponent } from './navigation-pane/navigation-pane.component';

import {AppRoutingModule} from './app-routing.module';
import { DepartmentService } from './service/department.service';
import { FooterComponent } from './footer/footer.component';
import { LeaveComponent } from './leave/leave.component';
import { LoginComponent } from './login/login.component';
import { RoleComponent } from './role/role.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    HeaderComponent,
    NavigationPaneComponent,
    FooterComponent,
    LeaveComponent,
    LoginComponent,
    RoleComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [RoleService,DepartmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
