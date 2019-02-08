import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../../products/product-list/product/models/product-model';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  item: ProductModel;

  @Output() remove: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit() {
  }

  removeItem() {
    this.remove.emit(this.item);
  }

  onMinus() {
    return this.item.count > 0 ? this.item.count-- : this.removeItem();
  }

  onPlus() {
    return this.item.count++;
  }

}
