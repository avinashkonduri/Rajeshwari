import { Injectable } from '@angular/core';
import { ApiUser, User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { throwError as observableThrowError, Observable } from 'rxjs';
const API_URL = 'https://gorest.co.in/public-api/';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(user: User) {
    let users = [];
    if (localStorage.getItem('Users')) {
      users = JSON.parse(localStorage.getItem('Users') || '{}');
      users = [user, ...users]; //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax (ECMAScript 2018./ES6)
    } else {
      users = [user];
    }
    localStorage.setItem('Users', JSON.stringify(users));
  }

  authUser(user: any) {
    let UserArray = [];
    if (localStorage.getItem('Users')) {
      UserArray = JSON.parse(localStorage.getItem('Users') || '{}');
    }
    return UserArray.find((p: { userName: any; password: any; }) => p.userName === user.userName && p.password === user.password);
  }

  addApiUser(apiUser: ApiUser): Observable<any>{
    return this.http.post<any>(API_URL + 'users',apiUser).pipe(tap(resp => {
    }));
  }

  getApiUserList(): Observable<any> {
    return this.http.get<ApiUser>(API_URL + 'users');
  }
}
