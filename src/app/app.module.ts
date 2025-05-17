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
import { GoldSuppliersComponent } from './customer/gold-suppliers/gold-suppliers.component';
import { TradeAssuranceComponent } from './customer/trade/trade-assurance/trade-assurance.component';
import { TradeShowsComponent } from './customer/trade/trade-shows/trade-shows.component';
import { MessageContainerComponent } from './customer/messages/message-container/message-container.component';
import { AssurenceFormComponent } from './customer/trade/assurence-form/assurence-form.component';
import { ExhibitionRegistrationComponent } from './customer/trade/exhibition-registration/exhibition-registration.component';
import { ShippingRadyComponent } from './customer/shipping/shipping-rady/shipping-rady.component';
import { PaymentMethodComponent } from './product/payment-method/payment-method.component';
import { PayToSupplierComponent } from './admin/pay-to-supplier/pay-to-supplier.component';
import { SupplierProductComponent } from './customer/supplier/supplier-product/supplier-product.component';


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
    PayToSupplierComponent, 
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
     SupplierProductComponent,
   
    // Home products
    ProductDetailsComponent,
    GoOrderComponent,
    PaymentMethodComponent,
    
    //navber components
    CartComponent,
    DeliverToComponent,
    GoldSuppliersComponent,
    TradeAssuranceComponent,
    TradeShowsComponent,
    ExhibitionRegistrationComponent,
    AssurenceFormComponent,
    //messages
    MessageContainerComponent,
    //shipping
    ShippingRadyComponent

   
    
  
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
