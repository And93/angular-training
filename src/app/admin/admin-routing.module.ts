import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {AdminComponent} from './admin.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {ProductFormAdminComponent} from './components/product-form/product-form.component';
import {ProductsAdminComponent} from './components/products/products-admin.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'products',
        component: ProductsAdminComponent
      },
      {
        path: 'product/edit/:productID',
        component: ProductFormAdminComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {
}
