import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import UserPageComponent from './user-page.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: UserPageComponent
      }
    ])
  ],
  exports: [RouterModule]
})
class UserRoutesModule {}

export default UserRoutesModule;
