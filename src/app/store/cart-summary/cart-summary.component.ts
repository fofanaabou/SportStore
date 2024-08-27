import {Component, OnInit, Signal, computed} from '@angular/core';
import {CartLine, CartModel, CartSummary} from '../../model/cart.model';
import {CurrencyPipe, NgFor, NgIf} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [RouterModule, NgFor, NgIf, CurrencyPipe],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css',
})
export class CartSummaryComponent implements OnInit {

  public sum: Signal<CartSummary>
  public lines: Signal<CartLine[]>

  constructor(public cart: CartModel) {
    this.sum = cart.summary;
    this.lines = computed(() => {
      return [...cart.lines()]
    });
  }

  ngOnInit() {
    console.log("summarize:",  this.cart.summary());
  }
}