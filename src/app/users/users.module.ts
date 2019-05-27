import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {UsersAPIProvider} from './config/users.config';
import {UsersServicesModule} from './users-services.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    UsersServicesModule
  ],
  providers: [
    UsersAPIProvider
  ]
})
export class UsersModule {
}
