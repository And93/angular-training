import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "../../products/product-list/product/models/product-model";

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent implements OnInit {

  @Input()
  bookedProducts: ProductModel[];

  @Output()
  boughtProducts: EventEmitter<ProductModel[]> = new EventEmitter<ProductModel[]>();

  constructor() { }

  ngOnInit() {
  }

  onBasket() {
    this.boughtProducts.emit(this.bookedProducts);
    this.bookedProducts = [];
  }

}
