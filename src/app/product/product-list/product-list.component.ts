import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product';
import { ProductserviceService } from '../../service/productservice.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  // @Output() productWasSelected = new EventEmitter<Product>();
  products: Product[];
  constructor(private productService: ProductserviceService) { }

  ngOnInit(): void {
    this.getProductList();
  }

  getProductList() {
    this.productService.findAllProduct().subscribe(data => this.products = data);
  }

}
