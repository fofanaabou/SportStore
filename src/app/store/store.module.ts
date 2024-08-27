import {NgModule} from '@angular/core';
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import {CounterDirective} from './counter.directive';
import {CartSummaryComponent} from './cart-summary/cart-summary.component';
import {CommonModule} from '@angular/common';
import {CartDetailComponent} from './cart-detail/cart-detail.component';
import {CheckoutComponent} from './checkout/checkout.component';
import {FormsModule, NgModel} from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [ModelModule, StoreComponent, CounterDirective, CartSummaryComponent, CartDetailComponent, CheckoutComponent, CommonModule, FormsModule],
  exports: [StoreComponent, CartSummaryComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {
}
