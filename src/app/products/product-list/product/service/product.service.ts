import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

import {ProductModel} from '../models/product-model';

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

  updateTask(prod: ProductModel): Promise<ProductModel> {
    const url = `${this.prodUrl}/${prod.id}`,
      body = JSON.stringify(prod),
      options = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
      };

    return this.http
      .put(url, body, options)
      .toPromise()
      .then(response => <ProductModel>response)
      .catch(this.handleError);
  }

  deleteTask(prod: ProductModel): Promise<ProductModel> {
    const url = `${this.prodUrl}/${prod.id}`;

    return (this.http
      .delete(url)
      .toPromise()
      .catch(this.handleError));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
