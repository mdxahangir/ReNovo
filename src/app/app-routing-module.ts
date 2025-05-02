import { NgModule } from "@angular/core"
import { RouterModule , Routes } from "@angular/router"
import { HomeComponent } from "./home/home.component";
import { AdminLoginComponent } from "./admin/admin-login/admin-login.component";

const routes : Routes = [
    { path : "" , component : HomeComponent},
    { path : "" , component:HomeComponent, 
        children :[
            {
                path : "admin-login",
                component : AdminLoginComponent,
            },
            {
                path : "",
                redirectTo : "admin-login",
                pathMatch : "full"
            }
        ]
    },
    
];
@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{ }