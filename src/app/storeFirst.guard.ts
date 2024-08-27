import { Injectable } from "@angular/core";
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { StoreComponent } from "./store/store.component";

@Injectable()
export class StoreFirstGuard {

  private firstNavigationGuard = true;

  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.firstNavigationGuard) {
      this.firstNavigationGuard = false;
      if(route.component !=StoreComponent) {
        this.router.navigateByUrl("/")
        return false;
      }
    }
    return true;
  }
}
