import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthComponent} from './auth/auth.component';
import {FormsModule} from '@angular/forms';
import {AdminComponent} from './admin.component';
import {RouterModule} from '@angular/router';

let routing = RouterModule.forChild([
  { path: "auth", component: AuthComponent},
  { path: "main", component: AdminComponent},
  { path: "**", redirectTo: "auth"}
]);

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    routing,
    AdminComponent,
    AuthComponent
  ],
  exports: [AdminComponent, AuthComponent]
})
export class AdminModule {
}
