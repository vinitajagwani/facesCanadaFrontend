import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from '../model/product';

const Product_Url = "http://localhost:8088/api/product/";
const headers = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class ProductserviceService {
	
  constructor(private http: HttpClient,
    private router: Router) { }

	registerProduct(product: Product): Observable<any> {
		return this.http.post(Product_Url + 'newProduct', {
		name: product.name,
		image: product.image,
		price: product.price,
		description: product.description
		},headers);
  }
  public findAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(Product_Url + 'list',headers);
  }

  public findProductById(id: number) {
    return this.http.get<Product>(`${Product_Url}` + `${id}`);
  }

  registrationOfProduct(product: Product) {

    return this.http.post<Product>(`http://localhost:8088/api/product/newProduct`, product);
  }

  updateProduct(id, product) {
    return this.http.put<Product>(`http://localhost:8088/api/product/update/${id}`, product);
  }

  getName(id) {
    return this.http.get(`http://localhost:8088/api/product/productname/${id}`);
  }
  public getActiveProduct(): Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:8088/api/product/active');
  }

 public getInactiveProduct(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:8088/api/product/inactive');
  }
  

  changeStatus(id,status){
    return this.http.get(`http://localhost:8088/api/product/updatestatus/${id}/${status}`)
  }
}
