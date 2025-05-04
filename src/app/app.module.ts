import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BayerDashboardComponent } from './customer/buyer/bayer-dashboard/bayer-dashboard.component';
import { SignupComponent } from './customer/signup/signup.component';
import { LoginComponent } from './customer/login/login.component';
import { SupplierDashboardComponent } from './customer/supplier/supplier-dashboard/supplier-dashboard.component';
import { AddProductComponent } from './customer/supplier/add-product/add-product.component';
import { RouterModule } from '@angular/router';
import routes  from './app-routing-module';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { GoOrderComponent } from './product/go-order/go-order.component';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { ProductsManagementComponent } from './admin/products-management/products-management.component';
import { ProductListingsComponent } from './customer/supplier/product-listings/product-listings.component';
import { PaymentTrackingComponent } from './customer/supplier/payment-tracking/payment-tracking.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserCrudComponent,
    AdminLoginComponent,
    BayerDashboardComponent,
    SignupComponent,
    LoginComponent,
    SupplierDashboardComponent,
    AddProductComponent,
    ProductDetailsComponent,
    GoOrderComponent,
    OrderManagementComponent,
    ProductsManagementComponent,
    ProductListingsComponent,
    PaymentTrackingComponent,
  
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
