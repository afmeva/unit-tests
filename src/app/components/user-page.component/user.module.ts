import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms/';

import UserListComponent from './user-list.component/user-list.component';
import UserListItemComponent from './user-list-item.component/user-list-item.component';
import UserDetailsComponent from './user-details.component/user-details.component';
import UserRoutesModule from './user-routes.module';
import UserCreateComponent from './user-create.component/user-create.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent,
    UserCreateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    UserRoutesModule
  ]
})
class UserModule {}

export default UserModule;
