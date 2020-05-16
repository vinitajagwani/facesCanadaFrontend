import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from '../../../service/productservice.service';
import { Product } from '../../../model/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  productRegistration: FormGroup;
  submitted: boolean = false;
  product: Product;

  constructor(private productService: ProductserviceService,
    private formbuilder: FormBuilder,
    private router: Router) {

    this.productRegistration = formbuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      image: ['', Validators.required],
      prize: ['', Validators.required],
      detail: ['', Validators.required],

    })
    this.product = {
      id: null,
      name: '',
      image: '',
      description: '',
      price: null,
    }

  }

  ngOnInit(): void {
  }

  saveProduct(productRegistration) {

    this.submitted = true

    // if (this.productRegistration.valid) {
    this.product.id = this.productRegistration.get('id').value;
    this.product.name = this.productRegistration.get('name').value;
    this.product.image = this.productRegistration.get('image').value;
    this.product.price = this.productRegistration.get('price').value;
    this.product.description = this.productRegistration.get('description').value;
    this.productService.registrationOfProduct(this.product).subscribe(productRegistration => {
      console.log('product added successfully!', productRegistration);
      // this.gotoLoginPage();
    }, error => {
      console.log(error)
      console.log(productRegistration);
    })

    // } else {
    //   alert('product not saved');
    // }

  }
}
