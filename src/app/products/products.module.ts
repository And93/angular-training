import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductService} from "./product-list/product/service/product.service";
import {ProductComponent} from "./product-list/product/product.component";
import {ProductListComponent} from "./product-list/product-list.component";
import {FormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ProductComponent,
    ProductListComponent
  ],
  providers: [
    ProductService
  ],
  exports: [
    ProductListComponent
  ]
})
export class ProductsModule { }
