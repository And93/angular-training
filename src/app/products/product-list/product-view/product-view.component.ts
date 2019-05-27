import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from '@angular/router';

// rxjs
import {switchMap} from 'rxjs/operators';

import {ProductModel} from '../product/models/product-model';
import {ProductService} from '../product/service/product.service';


@Component({
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {
  product: ProductModel;

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {
    this.product = new ProductModel();

    // it is not necessary to save subscription to route.paramMap
    // it handles automatically
    this.route.paramMap
      .pipe(switchMap((params: Params) => this.productService.getProduct(+params.get('productID'))))
      .subscribe(
        (product: ProductModel) => this.product = {...product},
        err => console.log(err)
      );
  }

  onGoBack() {
    this.router.navigate(['/product-list']);
  }

}
