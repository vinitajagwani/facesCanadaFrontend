import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})

export class ProductserviceService {

  Product_Url = "http://localhost:8088/api/product/";
 

  constructor(private http: HttpClient,
    private router: Router) { }

  public findAllProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8088/api/product/list');
  }

  public findProductById(id: number) {
    return this.http.get<Product>(`${this.Product_Url}` + `${id}`);
  }

  registrationOfProduct(product: Product) {

    return this.http.post<Product>(`http://localhost:8088/api/product/save`, product);
  }

  updateProduct(id, product) {
    return this.http.put<Product>(`http://localhost:8088/api/product/update/${id}`, product);
  }

  getName(id) {
    return this.http.get(`http://localhost:8088/api/product/productname/${id}`);
  }
}
