import { NgModule } from '@angular/core';
import {ProductRepository} from "./product.repository";
import {StaticDatasource} from "./Static.datasource";
import { CartModel } from './cart.model';



@NgModule({
  providers: [ProductRepository, StaticDatasource, CartModel]
})
export class ModelModule { }
