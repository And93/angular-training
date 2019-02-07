import {Injectable} from '@angular/core';
import {ProductModel} from '../../../products/product-list/product/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class BasketItemsService {

  private boughtProducts: ProductModel[];

  constructor() {
  }

  setBoughtProducts(products: ProductModel[]) {
    return this.boughtProducts = products;
  }

  getBoughtProducts() {
    return this.boughtProducts;
  }

  totalCount(): number {
    return this.boughtProducts.length;
  }

  totalCost(): number {
    let sum: number = 0;
    this.boughtProducts.forEach(product => sum + product.cost);
    return sum;
  }
}
