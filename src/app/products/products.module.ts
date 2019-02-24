import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductComponent} from './product-list/product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductFormComponent} from './product-list/product-form/product-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductFormComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule {
}
