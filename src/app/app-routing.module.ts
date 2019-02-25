import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ProductListComponent} from './products/product-list/product-list.component';
import {CartListComponent} from './cart/cart-list/cart-list.component';
import {PathNotFoundComponent} from './layout/components/path-not-found/path-not-found.component';
import {LoginComponent} from './layout/components/login/login.component';
import {ProductViewComponent} from './products/product-list/product-view/product-view.component';

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
    component: ProductViewComponent
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
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
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
