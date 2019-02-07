import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product-model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProduct(): ProductModel {
    return new ProductModel('Mobile phone', 'Phone 2018', 340, 9);
  }

  getProducts(): ProductModel[] {
    return [
      new ProductModel('Mobile phone', 'Super phone 2019', 340, 2),
      new ProductModel('Mobile phone', 'Smartphone', 180, 15),
      new ProductModel('TV', 'Home rest v1.0', 875, 5),
      new ProductModel('Copter', 'Free fly 1000', 400, 7),
      new ProductModel('Sounds system', 'Happy neighbors v2.0', 780, 1, true),
      new ProductModel('PC', 'Electronic h5', 1500, 10)
    ];
  }
}
