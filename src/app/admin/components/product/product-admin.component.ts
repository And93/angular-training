import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductModel} from '../../../products/product-list/product/models/product-model';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css']
})
export class ProductAdminComponent implements OnInit {

  @Input() product: ProductModel;

  @Output() edit = new EventEmitter<ProductModel>();

  constructor() {
  }

  ngOnInit() {
  }

  onEdit() {
    this.edit.emit(this.product);
  }

}
