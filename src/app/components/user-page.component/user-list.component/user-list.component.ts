import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';

import UserService from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { delay, take, withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html'
})
class UserListComponent implements OnInit {
  userList: Observable<User[]>;
  currentUser: User = {} as User;

  constructor(private userService: UserService) {}

  public ngOnInit(): void {
    this.userList = this.userService.getUser();
  }

  public handleClick(user: User): void {
    this.currentUser = user;
  }

  public handleRandomPick(): void {
    of(true)
      .pipe(
        delay(1000),
        take(1),
        withLatestFrom(this.userList)
      )
      .subscribe(([_, user]) => {
        const index = this.randomNumberBetween(0, user.length);
        this.currentUser = user[index];
      });
  }

  public handleRandomPickSetTimout() {
    this.userList.pipe(take(1)).subscribe(user => {
      setTimeout(() => {
        const index = this.randomNumberBetween(0, user.length);
        this.currentUser = user[index];
      }, 1000);
    });
  }

  private randomNumberBetween(lowerLimit, upperLimit): number {
    return Math.floor(Math.random() * upperLimit + lowerLimit);
  }
}

export default UserListComponent;
