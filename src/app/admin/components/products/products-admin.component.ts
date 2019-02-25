import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ProductService} from '../../../products/product-list/product/service/product.service';
import {ProductModel} from '../../../products/product-list/product/models/product-model';

@Component({
  templateUrl: './products-admin.component.html'
})
export class ProductsAdminComponent implements OnInit {

  products: Promise<ProductModel[] | {}>;

  constructor(
    public productService: ProductService,
    private router: Router
  ) {
  }

  ngOnInit() {
    return this.products = this.productService.getProducts();
  }

  onEdit(product: ProductModel) {
    const link = ['admin/product/edit', product.id];
    this.router.navigate(link);
  }
}
