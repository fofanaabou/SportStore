import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
import {RouterModule} from '@angular/router';
import {AuthGuard} from './auth.guard';
import {MaterialFeatures} from './material.features';
import {ProductEditorComponent} from './product.editor/product.editor.component';
import {ProductTableComponent} from './product.table/product.table.component';
import {OrderTableComponent} from './order.table/order.table.component';
import { ModelModule } from '../model/model.module';

let routing = RouterModule.forChild([
  {path: "auth", component: AuthComponent},
  {
    path: "main", component: AdminComponent, canActivate: [AuthGuard],
    children: [
      {path: "products/:mode/:id", component: ProductEditorComponent},
      {path: "products/:mode", component: ProductEditorComponent},
      {path: "products", component: ProductTableComponent},
      {path: "orders", component: OrderTableComponent}
    ]
  },
  {path: "**", redirectTo: "auth"}
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    routing,
    AdminComponent,
    AuthComponent,
    MaterialFeatures,
  ],
  providers: [AuthGuard],
  exports: [AdminComponent, AuthComponent, MaterialFeatures]
})
export class AdminModule {
}
