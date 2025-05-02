import { NgModule } from "@angular/core"
import { RouterModule , Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";
import { BayerDashboardComponent } from "./customer/buyer/bayer-dashboard/bayer-dashboard.component";
import { SigninSignupComponent } from "./customer/signin-signup/signin-signup.component";

const routes : Routes = [
    { path : "home" , component : HomeComponent},
    // { path : "" , component:HomeComponent, 
    //     children :[
    //         {
    //             path : "admin-login",
    //             component : AdminLoginComponent,
    //         },
    //         {
    //             path : "",
    //             redirectTo : "admin-login",
    //             pathMatch : "full"
    //         }
    //     ]
    // },
    { path : "" , redirectTo : "admin-login", pathMatch: "full" },
    { path : "admin-login", component : AdminLoginComponent},
    { path : "admin-dashboard", component : AdminDashboardComponent},

    {path:"buyer-dashboard",component:BayerDashboardComponent},
    // {
    //     path:'', canActivate:[BuyerAuthGaurdService], children:[
    //       {path:"buyer-dashboard",component:BayerDashboardComponent},
    //       {path:"checkout", component:CheckoutComponent}
    //     ]
    //   },
    { path : "signin-signup", component : SigninSignupComponent }
    
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
 export class AppRoutingModule{ }
export default routes;