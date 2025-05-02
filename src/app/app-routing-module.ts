import { NgModule } from "@angular/core"
import { RouterModule , Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";
import { AdminDashboardComponent } from "./admin/admin-dashboard/admin-dashboard.component";

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
    { path : " " , redirectTo : "admin-login", pathMatch: "full" },
    { path : "admin-login", component : AdminLoginComponent},
    { path : "admin-dashboard", component : AdminDashboardComponent}
    
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{ }