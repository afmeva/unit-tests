import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import UserListComponent from './user-list.component/user-list.component';
import UserCreateComponent from './user-create.component/user-create.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserListComponent
      },
      {
        path: 'create',
        component: UserCreateComponent
      }
    ])
  ],
  exports: [RouterModule]
})
class UserRoutesModule {}

export default UserRoutesModule;
