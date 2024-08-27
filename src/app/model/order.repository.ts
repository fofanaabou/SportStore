import { Observable } from "rxjs";
import { StaticDatasource } from "./Static.datasource";
import { Order } from "./order";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class OrderRepository {
  
  constructor(private dataSource: StaticDatasource) {}

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
