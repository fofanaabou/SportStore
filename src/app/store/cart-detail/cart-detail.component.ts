import { Component, OnInit } from '@angular/core';
import {CartLine, CartModel } from '../../model/cart.model';
import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-detail',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    CommonModule,
    RouterModule,
  ],
  templateUrl: './cart-detail.component.html',
  styleUrl: './cart-detail.component.css'
})
export class CartDetailComponent implements OnInit {

  public lines: CartLine[] = [];

  constructor(public cart: CartModel) {
    this.lines = this.cart.lines();
  }

  ngOnInit() {
    
  }
}
