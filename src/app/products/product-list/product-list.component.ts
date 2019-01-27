import {Component, Input, OnInit} from '@angular/core';
import {ProductModel} from "./product/models/product-model";
import {ProductService} from "./product/service/product.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];

  constructor(public productService: ProductService) {
  }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onBuy() {
    console.log('Congratulations');
  }
}
