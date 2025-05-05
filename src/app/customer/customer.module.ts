import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderProtectionComponent } from './order-protection/order-protection.component';



@NgModule({
  declarations: [
     
  
    OrderProtectionComponent
  ],
  imports: [
    CommonModule, FormsModule, HttpClientModule
  ]
})
export class CustomerModule { }
