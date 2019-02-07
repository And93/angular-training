import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from '../../products/product-list/product/models/product-model';
import {BasketItemsService} from './service/basket-items.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Input()
  bookedProducts: ProductModel[];

  constructor(public basketItemsService: BasketItemsService) {
  }

  ngOnInit() {
  }

  onBasket() {
    this.basketItemsService.setBoughtProducts(this.bookedProducts);
    this.bookedProducts = [];
  }

}
