import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {PathNotFoundComponent} from './components/path-not-found/path-not-found.component';
import {LoginComponent} from './components/login/login.component';

@NgModule({
  declarations: [
    PathNotFoundComponent,
    LoginComponent
  ],
  imports: [
    FormsModule,
    CommonModule
  ]
})
export class LayoutModule {
}
