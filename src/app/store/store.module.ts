import { NgModule } from '@angular/core';
import {ModelModule} from "../model/model.module";
import {StoreComponent} from "./store.component";
import { CounterDirective } from './counter.directive';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    ModelModule, StoreComponent, CounterDirective, CartSummaryComponent,
    CommonModule
  ],
  exports: [StoreComponent, CartSummaryComponent]
})
export class StoreModule { } 
