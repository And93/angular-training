import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './basket/basket.component';
import {OrderByPipe} from './basket/pipes/order-by.pipe';

@NgModule({
  declarations: [
    BasketComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasketComponent,
    OrderByPipe
  ]
})
export class SharedModule {
}
