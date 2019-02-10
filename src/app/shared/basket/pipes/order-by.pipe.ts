import {Pipe, PipeTransform} from '@angular/core';
import {ProductModel} from '../../../products/product-list/product/models/product-model';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(value: ProductModel[], args: boolean = true): ProductModel[] {
    const condition1 = args ? 1 : -1;
    const condition2 = args ? -1 : 1;
    return value.sort((product1: ProductModel, product2: ProductModel) => {
      return product1.name > product2.name ? condition1 : product1.name < product2.name ? condition2 : 0;
    });
  }

}
