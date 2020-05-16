import { Component, OnInit, Input } from '@angular/core';
import { ProductserviceService } from '../../service/productservice.service';
import { Product } from '../../model/product';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;


  id: any;
  constructor(private producthttpService: ProductserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params['id'];
        this.getProductById(this.id);
      }
    );
  }

  getProductById(id: number) {
    this.producthttpService.findProductById(id).subscribe(
      response => {
        this.product = response;
        console.log(this.product);
        // this.router.navigate[this.id];
      }
    )
  }
}
