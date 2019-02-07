import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from './product-list/product/service/product.service';
import {ProductComponent} from './product-list/product/product.component';
import {ProductListComponent} from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
