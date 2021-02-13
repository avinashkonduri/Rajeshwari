import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ApiUser } from '../model/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  users!: ApiUser;
  regForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    status: new FormControl(''),
  });
  constructor(private userApiService: UserService) { }

  ngOnInit(): void {
  }

  onReset() {
    this.regForm.reset();
  }
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regForm.value);
    this.userApiService.addUser(this.userData());
    this.userApiService.addApiUser(this.userData()).subscribe(
      data => {
        alert("Country as Added Successfully");

      },
      error => {
        alert('Country not Added');
        console.log(error);
      }
    );
    this.onReset();
    //localStorage.setItem('users', JSON.stringify(this.users))
  }

  userData(): ApiUser {
    return this.users = {
      name: this.userName.value,
      email: this.email.value,
      gender: this.gender.value,
      status: this.status.value,
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
  get gender() {
    return this.regForm.get('gender') as FormControl;
  }
  get status() {
    return this.regForm.get('status') as FormControl;
  }
  // ------------------------
}
