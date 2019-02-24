import {Injectable} from '@angular/core';
import {ProductModel} from '../models/product-model';

const productList = [
  new ProductModel(1, 'Mobile phone', 'Phone 2018', 340),
  new ProductModel(2, 'Mobile phone', 'Super phone 2019', 340),
  new ProductModel(3, 'Mobile phone', 'Smartphone', 180),
  new ProductModel(4, 'TV', 'Home rest v1.0', 875),
  new ProductModel(5, 'Copter', 'Free fly 1000', 400),
  new ProductModel(6, 'Sounds system', 'Happy neighbors v2.0', 780, true),
  new ProductModel(7, 'PC', 'Electronic h5', 1500)
];

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() {
  }

  getProducts(): Promise<ProductModel[] | {}> {
    return new Promise(resolve => resolve(productList))
      .catch(err => {
        throw (err);
      });
  }

  getProduct(id: number | string): Promise<ProductModel> {
    return this.getProducts()
      .then((products: ProductModel[]) => products.find((prod: ProductModel) => prod.id === +id))
      .catch(() => Promise.reject('Error in ProductService::getProduct'));
  }

  updateTask(prod: ProductModel): void {
    const i = productList.findIndex(p => p.id === prod.id);
    if (i > -1) {
      productList.splice(i, 1, prod);
    }
  }

  deleteTask(prod: ProductModel): void {
    const i = productList.findIndex(p => p.id === prod.id);
    if (i > -1) {
      productList.splice(i, 1);
    }
  }
}
