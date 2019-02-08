import {Component, OnInit} from '@angular/core';
import {BasketItemsService} from './service/basket-items.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  constructor(public basketItemsService: BasketItemsService) {
  }

  ngOnInit() {
  }

  onBasket() {
    this.basketItemsService.setBoughtProducts(this.basketItemsService.chosenProducts);
  }

}
