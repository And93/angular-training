import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {Router} from '@angular/router';

import {AppComponent} from './app.component';
import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import {ContactUsComponent} from './feedback/contact-us/contact-us.component';
import {LayoutModule} from './layout/layout.module';
import {SharedModule} from './shared/shared.module';
import {AdminModule} from './admin/admin.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,

    CoreModule,
    ProductsModule,
    CartModule,
    LayoutModule,
    SharedModule,
    AdminModule,

    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
    console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
