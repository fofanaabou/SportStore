import { Component } from '@angular/core';
import { OrderRepository } from '../../model/order.repository';
import { Order } from '../../model/order';
import {FormsModule, NgForm } from '@angular/forms';
import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    CommonModule,
    FormsModule
  ],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.css'
})
export class CheckoutComponent {
  orderSent: boolean = false;
  submitted: boolean = false;
  
  constructor(public repository: OrderRepository, public order: Order) {}
  
  submitOrder(form: NgForm) {
    this.submitted = true;
    if(form.valid) {
      this.repository.saveOrder(this.order).subscribe(order => {
        this.order.clear();
        this.orderSent = true;
        this.submitted = false;
      })
    }
  }
}
