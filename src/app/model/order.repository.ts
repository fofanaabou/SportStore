import { Observable } from "rxjs";
import { Order } from "./order";
import { Injectable } from "@angular/core";
import { RestDatasourceService } from "./rest.datasource.service";

@Injectable({
  providedIn: 'root',
})
export class OrderRepository {
  
  constructor(private dataSource: RestDatasourceService) {}

  saveOrder(order: Order): Observable<Order> {
    return this.dataSource.saveOrder(order);
  }
}
