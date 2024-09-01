import { NgModule } from '@angular/core';
import {ProductRepository} from "./product.repository";
import {StaticDatasource} from "./Static.datasource";
import { CartModel } from './cart.model';
import { Order } from './order';
import { OrderRepository } from './order.repository';
import { RestDatasourceService } from './rest.datasource.service';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  providers: [
    provideHttpClient(),
    ProductRepository,
    StaticDatasource,
    CartModel,
    Order,
    OrderRepository,
    RestDatasourceService
  ]
})
export class ModelModule { }

