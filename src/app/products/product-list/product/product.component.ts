import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {ProductModel} from './models/product-model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() added: EventEmitter<boolean>;
  @Input() product: ProductModel;

  @Output() moreInfo = new EventEmitter<ProductModel>();
  @Output() selected: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  isSelected = false;

  constructor() {
  }

  ngOnInit() {
    this.added.subscribe(() => this.isSelected = false);
  }

  onSelected(): void {
    this.isSelected = !this.isSelected;
    this.selected.emit(this.product);
  }

  onMoreInfo() {
    this.moreInfo.emit(this.product);
  }
}
