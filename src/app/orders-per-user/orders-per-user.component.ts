import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { User } from 'src/app/model/user';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/service/user-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserListFilter } from 'src/app/User/user-list/userList';
import { OrderListFilter } from 'src/app/order/order-list/OrderList';
import { OrdersPerUser } from 'src/app/model/orders-per-user'
@Component({
  selector: 'app-orders-per-user',
  templateUrl: './orders-per-user.component.html',
  styleUrls: ['./orders-per-user.component.css']
})
export class OrdersPerUserComponent implements OnInit {

	 ngOnInit(): void {
	
  //  this.UserList();
	this.getOrders();
	
  }
  users: User[];
  userOrders: OrdersPerUser[]
  
  
  constructor(private orderDetailService: OrderServiceService, private userService: UserService){	 
	 
  }
	
	
  orders: any=[];
  public barChartOptions = {
	  
	  responsive: true
  };
  public barChartLabels: any=[];
  
  public barChartType='bar';
  public barChartLegend=true;
  public barChartData = [
  {
	  data: this.orders, label:'ORDERS PER USER'
  }
  ];

 
	//UserList() {
		//this.userService.findAllUser().subscribe(data => {
		//this.users = data;
		//this.barChartLabels = data.map(userNameList=>userNameList.username);
		//console.log(this.barChartLabels);
		//let temp: number[] = this.orderDetailService.ordersPerUser();
		//console.log(temp);
      

   // });
	
 // }
  public getOrders(){
	  this.orderDetailService.ordersPerUser().subscribe(response =>{
		 this.userOrders = response 
		 for(var ordersData in this.userOrders){
			 this.barChartLabels.push(ordersData);
			 this.orders.push(this.userOrders[ordersData]);
			 console.log(this.orders)
			 console.log(this.userOrders[ordersData])
		 }
		 console.log(this.userOrders)
	  });
  }

}