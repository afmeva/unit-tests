import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import UserService from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { currentId } from 'async_hooks';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
class UserListComponent implements OnInit {
  userList: Observable<User[]>;
  currentUser: User = {} as User;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userList = this.userService.getUser();
  }

  handleClick(user: User): void {
    this.currentUser = user;
  }
}

export default UserListComponent;
