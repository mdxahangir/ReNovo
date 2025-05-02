import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [  

    UserCrudComponent,

  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports : [
  
    UserCrudComponent,

  ], 
  
})
export class AdminModule { }
