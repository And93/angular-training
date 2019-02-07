import {Component, OnInit} from '@angular/core';
import {ProductModel} from '../../products/product-list/product/models/product-model';
import {BasketItemsService} from '../../shared/basket/service/basket-items.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {


  constructor(public basketItemsService: BasketItemsService) {
  }

  ngOnInit() {
  }

  myBoughtProducts(): ProductModel[] {
    return this.basketItemsService.getBoughtProducts();
  }

  totalCount() {
    return this.basketItemsService.totalCount()
  }

  totalCost() {
    return this.basketItemsService.totalCost();
  }

}
