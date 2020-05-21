import { Component, OnInit } from '@angular/core';
import { OrderServiceService } from '../../service/order-service.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderListFilter } from './OrderList';
@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  orderDetail;
  orderlist: FormGroup;
  orderListFilter: OrderListFilter;
  buttonClicked;

  constructor(private formbulder: FormBuilder
    , private router: Router, private route: ActivatedRoute
    ,  private orderDetailService: OrderServiceService) {

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
    if (this.orderlist.get('list').value == "All order") {
      this.totalOrder();
    } else if (this.orderlist.get('list').value == "Approved order") {
      this.approvedOrder();

    } else if (this.orderlist.get('list').value == "Rejected order") {
      this.rejectedOrder();
    }

  }

  changeStatus(id, number) {
    let count = 0;
    this.buttonClicked = true;
    this.orderDetailService.getStatusChange(id, number).subscribe(
      response => console.log(response)

    ), eror => (console.error());
  }

}
