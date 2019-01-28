import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from "./models/product-model";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input()
  product: ProductModel;

  @Output()
  selected: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  isSelected: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  onSelected(): void {
    this.isSelected = !this.isSelected;
    this.selected.emit(this.product);
  }
}
