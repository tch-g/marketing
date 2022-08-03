import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DistributorRegistrationComponent } from "./distributor-registration/distributor-registration.component";
import { DistributorSalesComponent } from "./distributor-sales/distributor-sales.component";
import { ProductRegistrationComponent } from "./product-registration/product-registration.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'distributor-registration'
  },
  {
    path: 'distributor-registration',
    component: DistributorRegistrationComponent
  },
  {
    path: 'product-registration',
    component: ProductRegistrationComponent
  },
  {
    path: 'distributor-sales',
    component: DistributorSalesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MarketRoutingModule {}