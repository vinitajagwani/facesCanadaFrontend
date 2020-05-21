import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/User';
import { Order } from 'src/app//model/Order';
import { Observable } from 'rxjs';
const ORDER_API = "http://localhost:8088/api/order/"
@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private http: HttpClient) { }

  public placeOrder(order: Order): Observable<Order> {

    return this.http.post<Order>(ORDER_API + "placeOrder", order);
  }

  public MyOrderDetailById(id: any) {
    return this.http.get<Order>(`${ORDER_API}` + 'myorder/' + `${id}`);
  }

  public getAllOrder() {
    return this.http.get<Order>(`${ORDER_API}` + 'list');
  }

  public getApprovedOrder() {
    return this.http.get<Order>(`${ORDER_API}` + 'approved/list');
  }

  public getRejectedOrder() {
    return this.http.get<Order>(`${ORDER_API}` + 'rejected/list');
  }

  public updateOrder(id: any, order: Order) {

    return this.http.put<Order>(`http://localhost:8088/api/order/update/${id}`, order);
  }

  GetSingleOrderByID(id) {
    return this.http.get<Order>(`http://localhost:8088/api/order/${id}`)
  }

  public getStatusChange(id, number) {
    return this.http.get<Order>(`http://localhost:8088/api/order/statuschange/${id}/${number}`);
  }
  public deleteOrder(id) {
    return this.http.delete(`http://localhost:8088/api/order/delete/${id}`)
  }
}
