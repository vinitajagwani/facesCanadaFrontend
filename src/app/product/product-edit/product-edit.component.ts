import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from '../../service/productservice.service';
import { Product } from '../../model/product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  productRegistration: FormGroup;
  submitted: boolean = false;
  product: Product;
  id: number;
  name;
  editMode = false;

  constructor(private route: ActivatedRoute, private productHttpService: ProductserviceService, private formbuilder: FormBuilder,
    private router: Router) {

    this.productRegistration = formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],

    })
   this.product = {
      id: null,
      name: '',
      image: '',
      description: '',
      price: null,
	  isActive: null
    }
  }

  ngOnInit(): void {
 this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];

        this.product = new Product();
        this.productHttpService.findProductById(this.id).subscribe(
          data => this.product = data)
        // this.editMode = params['id'] != null;
        // console.log(this.editMode);

      }
    );
  }

  updateProduct() {

    this.submitted = true
    this.productHttpService.updateProduct(this.id, this.product).subscribe(
      data => {
        console.log(data)
        this.router.navigate(['../'],{relativeTo: this.route})
      }
    )

  }
}
