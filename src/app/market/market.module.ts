import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketRoutingModule } from './market-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DistributorRegistrationComponent } from './distributor-registration/distributor-registration.component';
import { ProductRegistrationComponent } from './product-registration/product-registration.component';
import { DistributorSalesComponent } from './distributor-sales/distributor-sales.component';



@NgModule({
  declarations: [
    DistributorRegistrationComponent,
    ProductRegistrationComponent,
    DistributorSalesComponent
  ],
  imports: [
    CommonModule,
    MarketRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers:[]
})
export class MarketModule { }
