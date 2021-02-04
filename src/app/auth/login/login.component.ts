import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.loginForm.value);
    //localStorage.setItem('users', JSON.stringify(this.users))
  }
}
