import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-list/cart-item/cart-item.component';

@NgModule({
  declarations: [CartListComponent, CartItemComponent],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
