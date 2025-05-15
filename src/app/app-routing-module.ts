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
import { GoldSuppliersComponent } from './customer/gold-suppliers/gold-suppliers.component';
import { TradeAssuranceComponent } from './customer/trade/trade-assurance/trade-assurance.component';
import { MessageContainerComponent } from './customer/messages/message-container/message-container.component';
import { FavouriteComponent } from './customer/favourite/favourite.component';
import { AssurenceFormComponent } from './customer/trade/assurence-form/assurence-form.component';
import { ExhibitionRegistrationComponent } from './customer/trade/exhibition-registration/exhibition-registration.component';
import { ShippingRadyComponent } from './customer/shipping/shipping-rady/shipping-rady.component';
import { TradeShowsComponent } from './customer/trade/trade-shows/trade-shows.component';
import { PaymentMethodComponent } from './product/payment-method/payment-method.component';


const routes : Routes = [

    { path : " " , redirectTo : "admin-login", pathMatch: "full" },
     { path : "" , component : HomeComponent},

    { path : "admin-login", component : AdminLoginComponent},
    { path : "admin-dashboard", component : AdminDashboardComponent},

    { path:"buyer-dashboard",component:BayerDashboardComponent},


//Users------
    { path: 'signup', component: SignupComponent },
    // { path: " ", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: LoginComponent },

    // Home page
    { path : "gold-supplier", component : GoldSuppliersComponent},
    { path : "trade-assurance", component : TradeAssuranceComponent},
    { path : "trade-shows", component : TradeShowsComponent},
    { path : "exhibition-registration", component : ExhibitionRegistrationComponent},
    { path : "assurence-form", component : AssurenceFormComponent},

    //Messages
    { path: '', redirectTo: '/messages', pathMatch: 'full' },
    { path: 'messages', component: MessageContainerComponent },
    //Favourite
    { path: 'favourite', component : FavouriteComponent},
    //shipping
    { path : "shipping-rady", component : ShippingRadyComponent},
   


    { path: 'supplier-dashboard', component: SupplierDashboardComponent },
    { path: 'add-product', component: AddProductComponent },
    { path : 'product-details' , component : ProductDetailsComponent},
    { path : 'go-order', component : GoOrderComponent },
    { path : "payment-method", component : PaymentMethodComponent },
    { path : "order-management" , component : OrderManagementComponent},
    { path : 'product-management', component : ProductsManagementComponent},
    { path : 'product-listings', component : ProductListingsComponent},
    { path : 'payment-tracking', component : PaymentTrackingComponent},
    { path : 'order-processing',component : OrderProcessingComponent},
    { path : 'seller-payment', component : SellerPaymentComponent},
    { path : 'cart', component : CartComponent},
    { path : "deliver-to", component : DeliverToComponent},
    { path : "order-protection", component : OrderProtectionComponent },
//cart
{ path: 'products', component: CartComponent },
{ path: 'help', component: CartComponent },
{ path: 'contact', component: CartComponent },
{ path: 'dispute', component: CartComponent },
{ path: 'about', component: CartComponent },
{ path: 'terms', component: CartComponent },
{ path: 'privacy', component: CartComponent },
{ path: '', redirectTo: '/', pathMatch: 'full'},
//

  ];
  
  // @NgModule({
  //   imports: [RouterModule.forRoot(routes)],
  //   exports: [RouterModule]
  // })
  export default routes;
