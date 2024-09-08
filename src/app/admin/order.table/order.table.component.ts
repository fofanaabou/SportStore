import { Component, IterableDiffer, IterableDiffers } from '@angular/core';
import { MaterialFeatures } from '../material.features';
import { CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Order } from '../../model/order';
import { MatTableDataSource } from '@angular/material/table';
import { OrderRepository } from '../../model/order.repository';

@Component({
  selector: 'app-order.table',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    FormsModule,
    CommonModule,
    MaterialFeatures
  ],
  templateUrl: './order.table.component.html',
  styleUrl: './order.table.component.css'
})
export class OrderTableComponent {

  colsAndRows: string[] = ['name', 'zip', 'cart_p', 'cart_q', 'buttons'];

  dataSource = new MatTableDataSource<Order>(this.repository.orders())
  differ: IterableDiffer<Order>;

  constructor(private repository: OrderRepository, private differs: IterableDiffers) {

    this.differ = differs.find(this.repository.orders()).create();
    this.dataSource.filter = "true";
    this.dataSource.filterPredicate = (order, include) => {
      return !order.shipped || include.toString() == "true"
    };
  }

  get includeShipped(): boolean {
    return this.dataSource.filter == "true";
  }

  set includeShipped(include: string) {
    this.dataSource.filter = include.toString();
  }

  toggleShipped(order: Order) {
    order.shipped = !order.shipped;
    this.repository.updateOrder(order);
  }

  delete(id: number) {
    this.repository.deleteOrder(id);
  }

  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.orders());
    if (changes != null) {
      this.dataSource.data = this.repository.orders();
    }
  }
}
