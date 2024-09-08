import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable, map} from 'rxjs';
import {Product} from './Product';
import {Order} from './order';

const PROTOCOL = "http";
const PORT = 3500;

@Injectable({
  providedIn: 'root',
})
export class RestDatasourceService {

  baseUrl: string;
  public auth_token?: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = `${PROTOCOL}://localhost:${PORT}/`
  }

  get products(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.baseUrl + "products");
  }

  saveOrder(order: Order): Observable<Order> {
    return this.httpClient.post<Order>(this.baseUrl + "order", order);
  }

  authenticate(user: string, pass: string): Observable<boolean> {
    return this.httpClient.post<any>(this.baseUrl + "login", {
      name: user, password: pass
    }).pipe(map(response => {
      this.auth_token = response.success ? response.token : null;
      return response.success;
    }))
  }

  saveProduct(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.baseUrl + "products",
      product, this.getOptions());
  }

  updateProduct(product: Product): Observable<Product> {
    return this.httpClient.put<Product>(
      `${this.baseUrl}products/${product.id}`,
      product, this.getOptions());
  }

  deleteProduct(id: number): Observable<Product> {
    return this.httpClient.delete<Product>(`${this.baseUrl}products/${id}`, this.getOptions());
  }

  getOrders(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(this.baseUrl + "orders", this.getOptions());
  }

  deleteOrder(id: number): Observable<Order> {
    return this.httpClient.delete<Order>(`${this.baseUrl}orders/${id}`, this.getOptions());
  }

  updateOrder(order: Order): Observable<Order> {
    return this.httpClient.put<Order>(`${this.baseUrl}orders/${order.id}`, order, this.getOptions());
  }

  private getOptions() {
    return {
      headers: new HttpHeaders({
        "Authorization": `Bearer<${this.auth_token}>`
      })
    }
  }
}
