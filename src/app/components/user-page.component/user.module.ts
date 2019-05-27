import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import UserListComponent from './user-list.component/user-list.component';
import UserListItemComponent from './user-list-item.component/user-list-item.component';
import UserDetailsComponent from './user-details.component/user-details.component';
import UserPageComponent from './user-page.component';
import UserRoutesModule from './user-routes.module';

@NgModule({
  declarations: [
    UserListComponent,
    UserListItemComponent,
    UserDetailsComponent,
    UserPageComponent
  ],
  imports: [CommonModule, HttpClientModule, UserRoutesModule]
})
class UserModule {}

export default UserModule;
