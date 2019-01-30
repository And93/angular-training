import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BasketComponent} from './basket/basket.component';
import {BasketItemsService} from "./basket/service/basket-items.service";

@NgModule({
  declarations: [
    BasketComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BasketComponent
  ],
  providers: [
    BasketItemsService
  ]
})
export class SharedModule {
}
