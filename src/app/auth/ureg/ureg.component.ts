import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-ureg',
  templateUrl: './ureg.component.html',
  styleUrls: ['./ureg.component.css']
})
export class UregComponent implements OnInit {
  users!: User;
  regForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(private router: Router,private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regForm.value);
    this.userService.addUser(this.userData());
    this.router.navigate(['auth/login']);
    this.onReset();
    //localStorage.setItem('users', JSON.stringify(this.users))
  }

  onReset() {
    this.regForm.reset();
  }


  userData(): User {
    return this.users = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value
    }
  }

     // ------------------------------------
  // Getter methods for all form controls
  // ------------------------------------
  get userName() {
    return this.regForm.get('userName') as FormControl;
  }

  get email() {
    return this.regForm.get('email') as FormControl;
  }
  get password() {
    return this.regForm.get('password') as FormControl;
  }
  // ------------------------
}
