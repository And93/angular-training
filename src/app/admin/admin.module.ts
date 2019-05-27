import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ProductsAdminComponent} from './components/products/products-admin.component';
import {ProductAdminComponent} from './components/product/product-admin.component';
import {ProductFormAdminComponent} from './components/product-form/product-form.component';

@NgModule({
  declarations: [
    AdminComponent,
    ProductsAdminComponent,
    ProductAdminComponent,
    ProductFormAdminComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule {
}
