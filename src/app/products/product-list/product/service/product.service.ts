import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Promise<ProductModel[] | {}> {
    return new Promise((resolve) => {
      resolve([
        new ProductModel(1, 'Mobile phone', 'Phone 2018', 340),
        new ProductModel(2, 'Mobile phone', 'Super phone 2019', 340),
        new ProductModel(3, 'Mobile phone', 'Smartphone', 180),
        new ProductModel(4, 'TV', 'Home rest v1.0', 875),
        new ProductModel(5, 'Copter', 'Free fly 1000', 400),
        new ProductModel(6, 'Sounds system', 'Happy neighbors v2.0', 780, true),
        new ProductModel(7, 'PC', 'Electronic h5', 1500)
      ]);
    }).catch(err => {
      throw (err);
    });
  }
}
