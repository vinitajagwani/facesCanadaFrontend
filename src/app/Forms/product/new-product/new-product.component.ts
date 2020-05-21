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

  form: any = {};
  isSuccessful = false;
  isFailed = false;
  errorMessage = '';

  constructor(private productService: ProductserviceService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.registerProduct(this.form).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isFailed = true;
      }
    );
  }

}
