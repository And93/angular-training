import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
  private prodUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) {
  }

  getProducts(): Promise<ProductModel[] | {}> {
    return this.http
      .get(this.prodUrl)
      .toPromise()
      .then()
      .catch(this.handleError);
  }

  getProduct(id: number | string): Promise<ProductModel> {
    const url = `${this.prodUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then((product) => <ProductModel>product)
      .catch(this.handleError);
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

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
