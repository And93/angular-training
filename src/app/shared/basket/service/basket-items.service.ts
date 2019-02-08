import {Injectable} from '@angular/core';
import {ProductModel} from '../../../products/product-list/product/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class BasketItemsService {

  private boughtProducts: ProductModel[] = [];
  public chosenProducts: ProductModel[] = [];

  constructor() {
  }

  setBoughtProducts(products: ProductModel[]) { // TODO
    products.forEach(prod => {
      prod.count = 1;
      for (const value of this.boughtProducts) {
        if (prod.model === value.model) {
          value.count++;
          products.splice(products.indexOf(prod), 1);
          break;
        }
      }
    });
    return this.boughtProducts = products;
  }

  getBoughtProducts() {
    return this.boughtProducts;
  }

  totalCount(): number {
    if (!this.boughtProducts) {
      return;
    }
    return this.boughtProducts.length;
  }

  totalCost(): number {
    if (!this.boughtProducts) {
      return;
    }

    let sum = 0;
    this.boughtProducts.forEach(product => sum += product.cost);
    return sum;
  }
}
