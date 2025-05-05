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
import routes from './app-routing-module';
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { GoOrderComponent } from './product/go-order/go-order.component';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { ProductsManagementComponent } from './admin/products-management/products-management.component';
import { ProductListingsComponent } from './customer/supplier/product-listings/product-listings.component';
import { PaymentTrackingComponent } from './customer/supplier/payment-tracking/payment-tracking.component';
import { SellerPaymentComponent } from './customer/supplier/seller-payment/seller-payment.component';
import { OrderProcessingComponent } from './customer/supplier/order-processing/order-processing.component';
import { CartComponent } from './customer/cart/cart.component';
import { SuppliersManagementComponent } from './admin/suppliers-management/suppliers-management.component';
import { BuyersManagementComponent } from './admin/buyers-management/buyers-management.component';
import { MarketingManagementComponent } from './admin/marketing-management/marketing-management.component';
import { AnalyticsManagementComponent } from './admin/analytics-management/analytics-management.component';
import { FinancialsManagementComponent } from './admin/financials-management/financials-management.component';
import { SettingsManagementComponent } from './admin/settings-management/settings-management.component';
import { DeliverToComponent } from './customer/deliver-to/deliver-to.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // admin
    AdminDashboardComponent,
    AdminLoginComponent,
    UserCrudComponent,
    UserCrudComponent,
    OrderManagementComponent,
    ProductsManagementComponent,
    SuppliersManagementComponent,
    BuyersManagementComponent,
    MarketingManagementComponent,
    AnalyticsManagementComponent,
    FinancialsManagementComponent,
    SettingsManagementComponent, 
    // Bayer
    BayerDashboardComponent,
    SignupComponent,
    LoginComponent,
    // Supplier
    SupplierDashboardComponent,
    AddProductComponent,
    OrderProcessingComponent,
    PaymentTrackingComponent,
    ProductListingsComponent,
    SellerPaymentComponent,
    // Home
    ProductDetailsComponent,
    GoOrderComponent,
    SellerPaymentComponent,
    CartComponent,
    DeliverToComponent,
    
  
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
