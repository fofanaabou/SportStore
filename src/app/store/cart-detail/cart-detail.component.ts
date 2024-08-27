import { Component } from '@angular/core';
import { CartModel } from '../../model/cart.model';
import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf } from '@angular/common';

@Component({
  selector: 'app-cart-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    CommonModule,
  ],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent {

  constructor(public cart: CartModel) {
  }
}
