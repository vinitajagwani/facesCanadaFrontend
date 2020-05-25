import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from '../../service/productservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductListFilter } from 'src/app/product/product-list/productList';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { OrderListFilter } from 'src/app/order/order-list/OrderList';
@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  orderDetail;
  orderlist: FormGroup;
  orderListFilter: OrderListFilter;
  buttonClicked;

  constructor(private formbulder: FormBuilder
    , private router: Router, private route: ActivatedRoute
    , private orderDetailService: OrderServiceService) {

    this.orderlist = formbulder.group({
      list: [null]
    })
    this.orderListFilter = {
      orderlist: '',
    }
  }

  ngOnInit(): void {

    // this.orderDetailService.getAllOrder().subscribe(
    //   response=>this.orderDetail=response
    // )
    this.totalOrder();
	
  }

  totalOrder() {

    this.orderDetailService.getAllOrder().subscribe(
      response =>  {console.log(response)
	  this.orderDetail = response;
	  })

  }
 
  approvedOrder() {

    this.orderDetailService.getApprovedOrder().subscribe(
      response => this.orderDetail = response)

  }

  rejectedOrder() {

    this.orderDetailService.getRejectedOrder().subscribe(
      response => this.orderDetail = response)

  }

  onSubmit() {
    if (this.orderlist.get('list').value == "Orders") {
      this.totalOrder();
    } else if (this.orderlist.get('list').value == "Approved order Count") {
      this.approvedOrder();

    } else if (this.orderlist.get('list').value == "Rejected order Count") {
      this.rejectedOrder();
    }

  }

}
