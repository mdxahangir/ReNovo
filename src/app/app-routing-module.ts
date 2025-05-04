import { NgModule } from "@angular/core"
import { RouterModule , Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { BayerDashboardComponent } from "./customer/buyer/bayer-dashboard/bayer-dashboard.component";
import { SignupComponent } from "./customer/signup/signup.component";
import { LoginComponent } from "./customer/login/login.component";
import { SupplierDashboardComponent } from "./customer/supplier/supplier-dashboard/supplier-dashboard.component";
import { AddProductComponent } from "./customer/supplier/add-product/add-product.component";

const routes : Routes = [
    { path : "home" , component : HomeComponent},

    { path : " " , redirectTo : "admin-login", pathMatch: "full" },
    { path : "admin-login", component : AdminLoginComponent},
    { path : "admin-dashboard", component : AdminDashboardComponent},

    { path:"buyer-dashboard",component:BayerDashboardComponent},
    { path: "signup", component: SignupComponent },
    // { path: " ", redirectTo: 'login', pathMatch: 'full' },
    { path: "login", component: LoginComponent },
    { path : "supplier-dashboard", component : SupplierDashboardComponent },
    { path: "buyer-dashboard", component: BayerDashboardComponent },
    { path : "add-product", component : AddProductComponent}
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
export default routes;