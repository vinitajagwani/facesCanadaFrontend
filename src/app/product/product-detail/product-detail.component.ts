import { Component, OnInit, Input } from '@angular/core';
import { ProductserviceService } from 'src/app/service/productservice.service';
import { Product } from 'src/app/model/product';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductListFilter } from 'src/app/product/product-list/productList';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  productlist: FormGroup;
  uri: string;
  activeProductList = false;
  inActiveProductList = false;
  list: any;
  productListFilter: ProductListFilter;
  products: Product[];



  constructor(private formbulder: FormBuilder, private router: Router, private productService: ProductserviceService, private route: ActivatedRoute) {
    this.productlist = formbulder.group({
      list: [null]
    })
    this.productListFilter = {
      productlist: '',
    }
  }

  ngOnInit(): void {
	
    this.getActiveProductlist();
  }

  

  getActiveProductlist() {
    this.productService.getActiveProduct().subscribe(data => {
      this.products = data;
      alert("Active Products only:   " + data.length);
    });
  }
  reloadPage() {
    window.location.reload();
  }
	

	placeOrder(id){
		this.router.navigate(['placeOrder/$id',id])
	}

}
