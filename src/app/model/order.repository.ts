import { Observable } from "rxjs";
import { Order } from "./order";
import { Injectable, signal } from "@angular/core";
import { RestDatasourceService } from "./rest.datasource.service";

@Injectable({
  providedIn: 'root',
})
export class OrderRepository {

  private ordersSignal = signal<Order[]>([]);
  private loaded: boolean = false;

  constructor(private dataSource: RestDatasourceService) {}

  loadOrders() {
    this.loaded = true;
    this.dataSource.getOrders().subscribe(data => {
      this.ordersSignal.set(data);
    });
  }

  get orders() {
    if (!this.loaded) {
      this.loadOrders();
    }
    return this.ordersSignal.asReadonly();
  }

  saveOrder(order: Order): Observable<Order> {
    this.loaded = false;
    return this.dataSource.saveOrder(order);
  }

  updateOrder(order: Order) {
    this.dataSource.updateOrder(order).subscribe(order => {
      this.ordersSignal.update(orders => {
        orders.splice(orders.findIndex(o => o.id == order.id), 1, order);
        return orders;
      })
    })
  }

  deleteOrder(id: number) {
    this.dataSource.deleteOrder(id).subscribe(order => {
      this.ordersSignal.update(orders => {
        orders.splice(orders.findIndex(o => o.id == order.id), 1);
        return orders;
      })
    });
  }
}
