import {Injectable} from '@angular/core';
import {ProductModel} from '../../../products/product-list/product/models/product-model';

@Injectable({
  providedIn: 'root'
})
export class BasketItemsService {

  private boughtProducts: ProductModel[] = [];
  public chosenProducts: ProductModel[] = [];
  public totalCount = 0;
  public totalCost = 0;

  setBoughtProducts() {
    this.chosenProducts.forEach(product => {
      const existed = this.boughtProducts.find(({model}) => product.model === model);

      if (existed) {
        (existed as ProductModel).count++;
      } else {
        product.count = 1;
        this.boughtProducts.push(product);
      }
      this.totalCount++;
      this.totalCost += product.cost;
    });
    this.chosenProducts.length = 0;
  }

  getBoughtProducts() {
    return this.boughtProducts;
  }
}
