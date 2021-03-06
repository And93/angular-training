import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {ProductModel} from '../../products/product-list/product/models/product-model';
import {BasketItemsService} from '../../shared/basket/service/basket-items.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  constructor(
    public basketItemsService: BasketItemsService,
    private router: Router
  ) {
  }

  ngOnInit() {
  }

  myBoughtProducts(): ProductModel[] {
    return this.basketItemsService.getBoughtProducts();
  }

  onRemoveAll() {
    this.basketItemsService.removeAllBoughtProducts();
    this.router.navigate(['/product-list']);
  }

  removeProduct(product: ProductModel): ProductModel[] {
    const products: ProductModel[] = this.myBoughtProducts();
    const _product: ProductModel = products.find((value: ProductModel) => value === product);
    return products.splice(products.indexOf(_product), 1);
  }

}
