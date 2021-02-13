import { Component, OnInit } from '@angular/core';
import { ApiUser } from '../model/user';
import { UserService } from '../services/user.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CreateUserComponent } from '../create-user/create-user.component';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  apiUserList!: ApiUser[];
  constructor(private userApiService: UserService,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.getApiUsersList();
  }

  getApiUsersList() {
    this.userApiService.getApiUserList().subscribe(list => {
      this.apiUserList = list.data;
      console.log(this.apiUserList);
    })
  }
  add(){
    const modalRef = this.modalService.open(CreateUserComponent,
      {
        scrollable: true,
        windowClass: 'myCustomModalClass',
        // keyboard: false,
        // backdrop: 'static'
      });

    // let data = {
    //   prop1: country.countryId,
    //   prop2: country.countryName,
    //   prop3: country.phoneCode
    // }

    // modalRef.componentInstance.fromParent = data;
    // modalRef.result.then((result) => {
    //   console.log(result);
    // }, (reason) => {
    // });
  }
}
