import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

/**
 * Modules
 */

import {ProductsModule} from './products/products.module';
import {CartModule} from './cart/cart.module';
import { TaskComponent } from './task/task.component';
import { ContactUsComponent } from './feedback/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
