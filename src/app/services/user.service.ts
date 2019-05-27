import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, UserPartial, Picture } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
class UserService {
  readonly USER_URL = 'https://jsonplaceholder.typicode.com/users';
  readonly PICTURE_URL = 'https://jsonplaceholder.typicode.com/photos';

  constructor(private http: HttpClient) {}

  getPicInfo(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.PICTURE_URL);
  }

  getUserInfo(): Observable<UserPartial[]> {
    return this.http.get<UserPartial[]>(this.USER_URL);
  }

  getUser(): Observable<User[]> {
    return combineLatest(this.getPicInfo(), this.getUserInfo()).pipe(
      map(([picInfo, userInfo]) => {
        return userInfo.map((user, index) => {
          return {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            title: picInfo[index].title,
            url: picInfo[index].url,
            thumbnailUrl: picInfo[index].thumbnailUrl
          };
        });
      })
    );
  }
}

export default UserService;
