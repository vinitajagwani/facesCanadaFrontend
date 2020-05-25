import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserListFilter } from './userList';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userlist: FormGroup;
  uri: string;
  activeUserList = false;
  inActiveUserList = false;
  list: any;
  userListFilter: UserListFilter;
  users: User[];



  constructor(private formbulder: FormBuilder, private router: Router, private httpService: UserService, private route: ActivatedRoute) {
    this.userlist = formbulder.group({
      list: [null]
    })
    this.userListFilter = {
      userlist: '',
    }
  }

  ngOnInit(): void {

    this.UserList();
  }

  UserList() {
    this.httpService.findAllUser().subscribe(data => {
      this.users = data;
      alert("All Users:  " + data.length);

    });
  }

  getActiveUserlist() {
    this.httpService.getActiveUser().subscribe(data => {
      this.users = data;
      alert("Active users only:   " + data.length);
    });
  }

  getInactiveUserlist() {
    this.httpService.getInactiveUser().subscribe(data => {
      this.users = data;
      alert("Inactive users only: " + data.length);

    });;
  }


  updateUser(id) {
    console.log(` user ${id} updated`);
    this.router.navigate(['editprofile', id]);

  }

  changeStatus(id, status) {
    if (status) {
      this.httpService.changeStatus(id, 1).subscribe(data => console.log(data));
    } else {
      this.httpService.changeStatus(id, 0).subscribe(data => console.log(data));

    }
    this.UserList();

  }

  onSubmit() {
    if (this.userlist.get('list').value == "All") {
      this.UserList();
    } else if (this.userlist.get('list').value == "active") {
      this.getActiveUserlist();

    } else if (this.userlist.get('list').value == "inactive") {
      this.getInactiveUserlist();

    }
}
}
