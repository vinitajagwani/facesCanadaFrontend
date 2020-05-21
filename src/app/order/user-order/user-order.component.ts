import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user-service.service';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/model/Order';
@Component({
  selector: 'app-user-order',
  templateUrl: './user-order.component.html',
  styleUrls: ['./user-order.component.css']
})
export class UserOrderComponent implements OnInit {

 userOrderDetail;
  id;
  // order;
  editMode;


  constructor(private router: Router, private httpService: UserService, private orderDetailService: OrderServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getuserdetail();
  }

  getuserdetail() {
    this.httpService.getUserId().subscribe(
      data => {
        this.refreshUser(data);
      }
    )
  }

  refreshUser(id) {
    this.orderDetailService.MyOrderDetailById(id).subscribe(
      response => {
        this.userOrderDetail = response;
        console.log(this.userOrderDetail);
      }
    )
  }

  updateOrder(id) {

    // this.userOrderDetail.id;
    this.router.navigate([`updateOrder/`+id]);


  }
  onDelete(id){
	  this.orderDetailService.deleteOrder(id).subscribe(data => {
      console.log(data);
  });

}
}