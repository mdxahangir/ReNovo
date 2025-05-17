import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { UserCrudComponent } from './user-crud/user-crud.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrderManagementComponent } from './order-management/order-management.component';
import { ProductsManagementComponent } from './products-management/products-management.component';
import { SuppliersManagementComponent } from './suppliers-management/suppliers-management.component';
import { BuyersManagementComponent } from './buyers-management/buyers-management.component';
import { MarketingManagementComponent } from './marketing-management/marketing-management.component';
import { AnalyticsManagementComponent } from './analytics-management/analytics-management.component';
import { FinancialsManagementComponent } from './financials-management/financials-management.component';
import { SettingsManagementComponent } from './settings-management/settings-management.component';
import { PayToSupplierComponent } from './pay-to-supplier/pay-to-supplier.component';



@NgModule({
  declarations: [  

   
  ],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports : [


  ], 
  
})
export class AdminModule { }
