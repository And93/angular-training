import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../../products/product-list/product/models/product-model';
import {BasketItemsService} from '../../../shared/basket/service/basket-items.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  item: ProductModel;

  @Output() remove: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  date: Date;

  constructor(public basketItemsService: BasketItemsService) {
  }

  ngOnInit() {
    this.currentDate();
  }

  removeItem() { // TODO issue
    this.remove.emit(this.item);
    this.basketItemsService.totalCount--;
    this.basketItemsService.totalCost -= this.item.cost;
  }

  onMinus() {
    this.currentDate();

    if (this.item.count > 0) {
      this.item.count--;
      this.basketItemsService.totalCount--;
      this.basketItemsService.totalCost -= this.item.cost;
    } else {
      this.removeItem();
    }
  }

  onPlus() {
    this.currentDate();
    this.item.count++;
    this.basketItemsService.totalCount++;
    this.basketItemsService.totalCost += this.item.cost;
  }

  private currentDate() {
    return this.date = new Date();
  }
}
