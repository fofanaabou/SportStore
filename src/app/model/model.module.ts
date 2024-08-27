import { NgModule } from '@angular/core';
import {ProductRepository} from "./product.repository";
import {StaticDatasource} from "./Static.datasource";
import { CartModel } from './cart.model';
import { Order } from './order';
import { OrderRepository } from './order.repository';



@NgModule({
  providers: [ProductRepository, StaticDatasource, CartModel, Order, OrderRepository]
})
export class ModelModule { }
