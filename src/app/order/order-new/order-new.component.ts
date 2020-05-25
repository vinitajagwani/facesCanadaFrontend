import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/model/order';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Product } from 'src/app/model/product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { UserService } from 'src/app/service/user-service.service';

@Component({
  selector: 'app-order-new',
  templateUrl: './order-new.component.html',
  styleUrls: ['./order-new.component.css']
})
export class OrderNewComponent implements OnInit {

  orderDetail: Order;
  id: number;
  product: Product;
  orderRegistration: FormGroup;
  submitted = false;
  errorMessage;
  order;
  editMode = false;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder, private orderServices: OrderServiceService) {

  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.fetchId(this.id);
        console.log(this.id)
        
      });
    this.orderRegistration = this.formBuilder.group({
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^(\d{10}|\w+([\.-]?\w+))$/)]],
      address: ['', Validators.required],
      pincode: ['', [Validators.required, Validators.pattern(/^(\d{6}|\w+([\.-]?\w+))$/)]],
      productId: [this.id],
      userId: [null],
    })
    this.orderDetail = {
      id: null,
      productId: this.id,
      userId: null,
      name: '',
      address: '',
      pincode: null,
      phoneNumber: null,

    }

  }

  get f() {
    return this.orderRegistration.controls;
  }


  fetchId(id) {
    console.log(id);
    return id;
  }

  placeorder(orderRegistration) {
    this.submitted = true;

    this.orderDetail.productId = this.orderDetail.productId;
    this.orderDetail.userId = +window.sessionStorage.getItem('id');
    this.orderDetail.name = this.orderRegistration.get('name').value;
    this.orderDetail.address = this.orderRegistration.get('address').value;
    this.orderDetail.pincode = this.orderRegistration.get('pincode').value;
    this.orderDetail.phoneNumber = this.orderRegistration.get('phoneNumber').value;
    this.orderServices.placeOrder(this.orderDetail).subscribe(
      response => {console.log(response)
      this.router.navigate(['myorder'],{relativeTo: this.route});
       }
        ,error => {
      this.errorMessage = error.error.message;
    })


    console.log(this.orderDetail)
  }


}
