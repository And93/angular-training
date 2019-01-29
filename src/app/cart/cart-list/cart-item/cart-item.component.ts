import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "../../../products/product-list/product/models/product-model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  item: ProductModel;

  constructor() {
  }

  ngOnInit() {
  }

}
