import {computed, Injectable, Signal} from "@angular/core";
import {Product} from "./Product";
import {StaticDatasource} from "./Static.datasource";
import { RestDatasourceService } from "./rest.datasource.service";
import { toSignal } from "@angular/core/rxjs-interop";

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  products: Signal<Product[]>;
  categories: Signal<string[]>;

  constructor(private dataSource: RestDatasourceService) {
    // @ts-ignore
    this.products = toSignal(dataSource.products, {
      initialValue: []
    });

    this.categories = computed(() => {
      // @ts-ignore
      return this.products()
        .map(p => p.category ?? "(None)")
        .filter((c, index, array) =>
          array.indexOf(c) == index).sort();
    })


  }

  getProduct(id: number): Product | undefined {
    // @ts-ignore
    return this.products().find(p => p.id == id);
  }
}

