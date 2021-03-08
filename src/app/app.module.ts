import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SideNavigationBarComponent } from './side-navigation-bar/side-navigation-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { PricingAdminComponent } from './pricing-admin/pricing-admin.component';
import { CollectionComponent } from './collection/collection.component';
import { VendorComponent } from './vendor/vendor.component';
import { ProductComponent } from './product/product.component';
import { TemplateComponent } from './Segment/template/template.component';
import { CustomerComponent } from './customer/customer.component';
import { SystemDefaultComponent } from './system-default/system-default.component';
import { CurrencyBumpComponent } from './currency-bump/currency-bump.component';
import { AuditComponent } from './audit/audit.component';
import { PriceSimComponent } from './price-sim/price-sim.component';
import { RuleUploadComponent } from './rule-upload/rule-upload.component';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './ApiService';
import { FormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    SideNavigationBarComponent,
    PricingAdminComponent,
    CollectionComponent,
    VendorComponent,
    ProductComponent,
    TemplateComponent,
    CustomerComponent,
    SystemDefaultComponent,
    CurrencyBumpComponent,
    AuditComponent,
    PriceSimComponent,
    RuleUploadComponent
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
