import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuditComponent } from './audit/audit.component';
import { CollectionComponent } from './collection/collection.component';
import { CurrencyBumpComponent } from './currency-bump/currency-bump.component';
import { CustomerComponent } from './customer/customer.component';
import { PriceSimComponent } from './price-sim/price-sim.component';
import { PricingAdminComponent } from './pricing-admin/pricing-admin.component';
import { ProductComponent } from './product/product.component';
import { RuleUploadComponent } from './rule-upload/rule-upload.component';
import { TemplateComponent } from './Segment/template/template.component';
import { SystemDefaultComponent } from './system-default/system-default.component';
import { VendorComponent } from './vendor/vendor.component';

const routes: Routes = [
  {path: 'pricing-admin', component: PricingAdminComponent},
  {path: 'collection', component: CollectionComponent},
  {path: 'Vendor', component: VendorComponent},
  {path: 'Product', component: ProductComponent},
  {path: 'Segment/Template', component: TemplateComponent},
  {path: 'Customer', component: CustomerComponent},
  {path: 'SystemDefault', component: SystemDefaultComponent},
  {path: 'CurrencyBump', component: CurrencyBumpComponent},
  {path: 'Audit', component: AuditComponent},
  {path: 'PriceSim', component: PriceSimComponent},
  {path: 'RuleUpload', component: RuleUploadComponent},  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
