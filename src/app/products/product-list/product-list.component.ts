import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from './product/models/product-model';
import {ProductService} from './product/service/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: ProductModel[];
  booked: ProductModel[] = [];
  toBasket: ProductModel[] = [];

  constructor(public productService: ProductService) {
  }

  ngOnInit(): ProductModel[] {
    return this.products = this.productService.getProducts();
  }

  onSelected(product: ProductModel): ProductModel[] | number {

    if (this.booked.length) {
      for (const value of this.booked) {
        if (value.name === product.name && value.model === product.model) {
          return this.booked.splice(this.booked.indexOf(product), 1);
        }
      }
    }
    return this.booked.push(product);
  }

  onAdd(): void {
    this.booked.forEach((product: ProductModel) => this.toBasket.push(product));
    this.booked = [];
  }
}
