import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';
import { Order } from './order';

const PROTOCOL = "http";
const PORT = 3500;
@Injectable({
  providedIn: 'root'
})
export class RestDatasourceService {

  baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://localhost:${PORT}/`
  }

  get products(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order: Order): Observable<Order> {
    return  this.httpClient.post<Order>(this.baseUrl + "order", order);
  }
}
