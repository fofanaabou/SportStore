import {computed, Injectable, Signal} from "@angular/core";
import {Product} from "./Product";
import {StaticDatasource} from "./Static.datasource";

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  products: Signal<Product[]>;
  categories: Signal<string[]>;

  constructor(private dataSource: StaticDatasource) {
    this.products = dataSource.products;
    this.categories = computed(() => {
      return this.dataSource.products()
        .map(p => p.category ?? "(None)")
        .filter((c, index, array) => array.indexOf(c) == index)
        .sort();
    })
  }

  getProduct(id: number): Product | undefined {
    return this.dataSource.products().find(p => p.id == id);
  }
}
