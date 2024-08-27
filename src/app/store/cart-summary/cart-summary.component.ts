import {Component, Signal, computed} from '@angular/core';
import {CartLine, CartModel, CartSummary} from '../../model/cart.model';
import {ModelModule} from '../../model/model.module';
import {CurrencyPipe, NgFor, NgIf} from '@angular/common';
import {RouterModule} from '@angular/router';

@Component({
  selector: 'app-cart-summary',
  standalone: true,
  imports: [
    ModelModule,
    RouterModule,
    NgFor,
    NgIf,
    CurrencyPipe
  ],
  templateUrl: './cart-summary.component.html',
  styleUrl: './cart-summary.component.css'
})
export class CartSummaryComponent {
  public sum: Signal<CartSummary>
  public lines: Signal<CartLine[]>

  constructor(public cart: CartModel) {
    this.sum = cart.summary;
    
    this.lines = computed(() => {
      return [...cart.linesSignal()]
    })
    
  }
}
