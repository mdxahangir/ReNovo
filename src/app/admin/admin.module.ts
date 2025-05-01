import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { AdminService } from './admin-services/admin.service';



@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    UserCrudComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class AdminModule { }
