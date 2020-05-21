import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { ProductserviceService } from '../../service/productservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductListFilter } from './productList';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

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

    this.ProductList();
  }

  ProductList() {
    this.productService.findAllProducts().subscribe(data => {
      this.products = data;
      alert("All Products:  " + data.length);

    });
  }

  getActiveProductlist() {
    this.productService.getActiveProduct().subscribe(data => {
      this.products = data;
      alert("Active Products only:   " + data.length);
    });
  }

  getInactiveProductlist() {
    this.productService.getInactiveProduct().subscribe(data => {
      this.products = data;
      alert("Inactive Products only: " + data.length);

    });;
  }

  updateProduct(id) {
    console.log(` product ${id} updated`);
    this.router.navigate(['productlist/editproduct'+id]);

  }

  changeStatus(id, status) {
    if (status) {
      this.productService.changeStatus(id, 1).subscribe(data => console.log(data));
    } else {
      this.productService.changeStatus(id, 0).subscribe(data => console.log(data));

    }
    this.ProductList();

  }

  onSubmit() {
    if (this.productlist.get('list').value == "all") {
      this.ProductList();
    } else if (this.productlist.get('list').value == "active") {
      this.getActiveProductlist();

    } else if (this.productlist.get('list').value == "inactive") {
      this.getInactiveProductlist();

    }
}
onEdit(){
    this.router.navigate(['editProduct'],{relativeTo : this.route});
  }

}
