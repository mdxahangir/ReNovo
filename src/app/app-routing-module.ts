// import { Routes } from "@angular/router"
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { BayerDashboardComponent } from "./customer/buyer/bayer-dashboard/bayer-dashboard.component";
import { SignupComponent } from "./customer/signup/signup.component";
import { LoginComponent } from "./customer/login/login.component";
import { SupplierDashboardComponent } from "./customer/supplier/supplier-dashboard/supplier-dashboard.component";
import { AddProductComponent } from "./customer/supplier/add-product/add-product.component";
import { ProductDetailsComponent } from './product/product-details/product-details.component';
import { GoOrderComponent } from './product/go-order/go-order.component';
import { OrderManagementComponent } from './admin/order-management/order-management.component';
import { ProductsManagementComponent } from './admin/products-management/products-management.component';
import { ProductListingsComponent } from './customer/supplier/product-listings/product-listings.component';
import { PaymentTrackingComponent } from './customer/supplier/payment-tracking/payment-tracking.component';
import { OrderProcessingComponent } from './customer/supplier/order-processing/order-processing.component';
import { SellerPaymentComponent } from './customer/supplier/seller-payment/seller-payment.component';
import { CartComponent } from './customer/cart/cart.component';
import { DeliverToComponent } from './customer/deliver-to/deliver-to.component';
import { OrderProtectionComponent } from './customer/order-protection/order-protection.component';

const routes : Routes = [

    { path : " " , redirectTo : "admin-login", pathMatch: "full" },
     { path : "home" , component : HomeComponent},

    { path : "admin-login", component : AdminLoginComponent},
    { path : "admin-dashboard", component : AdminDashboardComponent},

    { path:"buyer-dashboard",component:BayerDashboardComponent},

    { path: 'signup', component: SignupComponent },
    // { path: " ", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    // { path : "supplier-dashboard",
    //   component : SupplierDashboardComponent,
    //   children: [
    //     { path : "add-product",component : AddProductComponent},
    //     // Default child route
    //     { path: '', redirectTo: 'add-product', pathMatch: 'full'},
   
    //   ]    
    // },
    { path: 'supplier-dashboard', component: SupplierDashboardComponent },
    { path: 'add-jahangir', component: AddProductComponent },
    { path : 'product-details' , component : ProductDetailsComponent},
    { path : 'go-order', component : GoOrderComponent },
    { path : "order-management" , component : OrderManagementComponent},
    { path : 'product-management', component : ProductsManagementComponent},
    { path : 'product-listings', component : ProductListingsComponent},
    { path : 'payment-tracking', component : PaymentTrackingComponent},
    { path : 'order-processing',component : OrderProcessingComponent},
    { path : 'seller-payment', component : SellerPaymentComponent},
    { path : 'cart', component : CartComponent},
    { path : "deliver-to", component : DeliverToComponent},
    { path : "order-protection", component : OrderProtectionComponent }
    




    // {
    //   path: 'parent',
    //   component: ParentComponent,
    //   children: [
    //     { path: 'child1', component: Child1Component },
    //     { path: 'child2', component: Child2Component },
        
    //   ]
    // }


  ];
  
  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule]
  // })
  export default routes;
