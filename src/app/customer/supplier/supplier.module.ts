import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierDashboardComponent } from './supplier-dashboard/supplier-dashboard.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListingsComponent } from './product-listings/product-listings.component';
import { PaymentTrackingComponent } from './payment-tracking/payment-tracking.component';
import { OrderProcessingComponent } from './order-processing/order-processing.component';
import { SellerPaymentComponent } from './seller-payment/seller-payment.component';



@NgModule({
  declarations: [

  
    OrderProcessingComponent,
        SellerPaymentComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SupplierModule { }
