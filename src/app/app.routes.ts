import { Route } from "@angular/router";
import { StoreComponent } from "./store/store.component";
import { CartDetailComponent } from "./store/cart-detail/cart-detail.component";
import { CheckoutComponent } from "./store/checkout/checkout.component";
import { StoreFirstGuard } from "./storeFirst.guard";

export const routes: Route[] = [
  { path: "store", component: StoreComponent, canActivate: [StoreFirstGuard]},
  { path: "cart", component: CartDetailComponent, canActivate: [StoreFirstGuard]},
  { path: "checkout", component: CheckoutComponent, canActivate: [StoreFirstGuard]},
  { path: "**", redirectTo: "store"}
]
