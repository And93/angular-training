import {Component, EventEmitter, OnInit} from '@angular/core';
import {ProductModel} from './product/models/product-model';
import {ProductService} from './product/service/product.service';
import {BasketItemsService} from '../../shared/basket/service/basket-items.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Promise<ProductModel[] | {}>;
  booked: ProductModel[] = [];
  added: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(
    public productService: ProductService,
    public basketItemsService: BasketItemsService
    ) {
  }

  ngOnInit(): Promise<ProductModel[] | {}> {
    return this.products = this.productService.getProducts();
  }

  onSelected(product: ProductModel): number {
    return this.booked.push(product);
  }

  onAdd(): void {
    this.booked.forEach((product: ProductModel) => this.basketItemsService.chosenProducts.push(product));
    this.booked.length = 0;
    this.added.emit(true);
  }
}
