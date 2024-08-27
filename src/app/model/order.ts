import { Injectable } from "@angular/core";
import {CartLine, CartModel } from "./cart.model";

@Injectable()
export class Order {
  id?: number;
  name?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  country?: string;
  shipped: boolean = false;
  #cart: CartModel;
  lines: CartLine[];

  constructor(c: CartModel) {
    this.#cart = c;
    this.lines = c.lines();
  }

  clear() {
    this.id = undefined;
    this.name = this.address = this.city = undefined;
    this.state = this.zip = this.country = undefined;
    this.shipped = false;
    this.#cart.clear();
  }
}
