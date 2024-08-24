import { Component, Signal, computed } from '@angular/core';
import { CartModel, CartSummary } from '../../model/cart.model';
import { ModelModule } from '../../model/model.module';
import {CurrencyPipe, NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [
    ModelModule,
    NgFor,
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  public sum: Signal<CartSummary>
  constructor(public cart: CartModel) {
    this.sum = cart.summary;
  }
}
