import { Component, OnInit } from '@angular/core';
import {ProductModel} from "../../products/product-list/product/models/product-model";

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  myBoughtProducts: ProductModel[];

  constructor() { }

  ngOnInit() {
  }

  onBought(products: ProductModel[]) {
    for (const product of products) {
      this.myBoughtProducts.push(product);
    }
  }

}
