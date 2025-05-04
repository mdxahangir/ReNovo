import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { GoOrderComponent } from './go-order/go-order.component';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    GoOrderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ProductModule { }
