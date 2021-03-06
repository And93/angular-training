import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

// rxjs
import {switchMap} from 'rxjs/operators';

import {ProductModel} from '../../../products/product-list/product/models/product-model';
import {ProductService} from '../../../products/product-list/product/service/product.service';

@Component({
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormAdminComponent implements OnInit {

  product: ProductModel;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.product = new ProductModel();
    this.route.paramMap
      .pipe(switchMap((params: Params) => this.productService.getProduct(+params.get('productID'))))
      .subscribe(
        (product: ProductModel) => this.product = {...product},
        err => console.log(err)
      );
  }

  onUpdProduct() {
    const product = {...this.product};
    return this.productService.updateTask(product)
      .then(() => this.onGoBack());
  }

  onGoBack() {
    return this.router.navigate(['/admin/products']);
  }

  onDelete() {
    const product = {...this.product};
    this.productService.deleteTask(product)
      .then(() => this.onGoBack());
  }
}
