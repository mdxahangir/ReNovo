import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, } from './app-routing-module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http'

import { HomeComponent } from './home/home.component';
import { LayoutModule } from './layout/layout.module';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './admin/user-crud/user-crud.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BayerDashboardComponent } from './customer/buyer/bayer-dashboard/bayer-dashboard.component';
import { SigninSignupComponent } from './customer/signin-signup/signin-signup.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminDashboardComponent,
    UserCrudComponent,
    AdminLoginComponent,
    BayerDashboardComponent,
    SigninSignupComponent
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    AppRoutingModule,
    HttpClientModule, 
    FormsModule,
    ReactiveFormsModule,
    // RouterModule.forRoot(appRoutes)
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
