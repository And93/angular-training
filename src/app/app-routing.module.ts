import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent} from './products/product-list/product-list.component';
import {CartListComponent} from './cart/cart-list/cart-list.component';
import {PathNotFoundComponent} from './layout/components/path-not-found/path-not-found.component';
import {ProductComponent} from './products/product-list/product/product.component';
import {LoginComponent} from './layout/components/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/product-list'
  },
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product/:productID',
    component: ProductComponent
  },
  {
    path: 'basket',
    component: CartListComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    component: PathNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
