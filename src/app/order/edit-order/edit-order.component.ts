import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { OrderServiceService } from 'src/app/service/order-service.service';
import { Order } from 'src/app/model/order';
@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.css']
})
export class EditOrderComponent implements OnInit {

	order: Order;
	submitted: boolean = false;
	id: number;
 constructor(private route: ActivatedRoute, private orderService: OrderServiceService, private formbuilder: FormBuilder,
    private router: Router) {
	
	
    
  }

  ngOnInit(): void {
 this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.order = new Order();
        this.orderService.getSingleOrderById(this.id).subscribe(
          data => this.order = data)
		}
    );
  }

  updateOrder(id, order) {

    this.submitted = true
    this.orderService.updateOrder(this.id, this.order).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['../../'],{relativeTo: this.route})
      }
    )

  }
}
