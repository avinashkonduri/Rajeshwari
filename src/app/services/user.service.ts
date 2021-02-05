import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

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
}
