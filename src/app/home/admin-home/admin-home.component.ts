import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { User } from '../../model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../../service/user-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserListFilter } from 'src/app/User/user-list/userList';
import { OrderListFilter } from 'src/app/order/order-list/OrderList';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  orderDetail;
  orderlist: FormGroup;
  
  userlist: FormGroup;
  uri: string;
  activeUserList = false;
  inActiveUserList = false;
  list: any;
  userListFilter: UserListFilter;
  users: User[];



  constructor(private formbulder: FormBuilder, private router: Router, private orderDetailService: OrderServiceService, private httpService: UserService, private route: ActivatedRoute) {
    this.userlist = formbulder.group({
      list: [null]
    })
    this.userListFilter = {
      userlist: '',
    }
	 
  }


  ngOnInit(): void {

    this.UserList();
	this.totalOrder();
  }

  UserList() {
    this.httpService.findAllUser().subscribe(data => {
      this.users = data;
      

    });
  }

  getActiveUserlist() {
    this.httpService.getActiveUser().subscribe(data => {
      this.users = data;
     
    });
  }

  getInactiveUserlist() {
    this.httpService.getInactiveUser().subscribe(data => {
      this.users = data;
      

    });;
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
	totalOrder() {

    this.orderDetailService.getAllOrder().subscribe(
      response =>  {console.log(response)
	  this.orderDetail = response;
	  });

  }
 

  
}

