import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-ureg',
  templateUrl: './ureg.component.html',
  styleUrls: ['./ureg.component.css']
})
export class UregComponent implements OnInit {
  users!:[];
  regForm = new FormGroup({
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.regForm.value);
    this.users = this.regForm.value;
    localStorage.setItem('users', JSON.stringify(this.users))
  }
}
