import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {ProductComponent} from './product-list/product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductViewComponent} from './product-list/product-view/product-view.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductViewComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule {
}
