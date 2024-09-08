import {computed, Injectable, signal, Signal} from "@angular/core";
import {Product} from "./Product";
import {RestDatasourceService} from "./rest.datasource.service";

@Injectable({
  providedIn: 'root',
})
export class ProductRepository {
  products = signal<Product[]>([]);
  categories: Signal<string[]>;

  constructor(private dataSource: RestDatasourceService) {

    this.dataSource.products.subscribe(data => {
      this.products.set(data);
    })

    this.categories = computed(() => {
      // @ts-ignore
      return this.products()
        .map(p => p.category ?? "(None)")
        .filter((c, index, array) =>
          array.indexOf(c) == index).sort();
    });
  }

  getProduct(id: number): Product | undefined {
    // @ts-ignore
    return this.products().find(p => p.id == id);
  }

  saveProduct(product: Product) {
    console.log("hey:", this.dataSource.auth_token)
    if (product.id == null || product.id === 1) {
      this.dataSource.saveProduct(product)
        .subscribe(p => {
          this.products.update((pdata: Product[]) => {
            pdata.push(p);
            return pdata;
          })
        })
    } else {
      this.dataSource.updateProduct(product)
        .subscribe(s => {
          this.products.update(pdata => {
            pdata.splice(pdata.findIndex(p => p.id == s.id), 1, s);
            return pdata;
          })
        })
    }
  }

  deleteProduct(id: number) {
    this.dataSource.deleteProduct(id).subscribe(p => {
      this.products.update(pdata => {
        pdata.splice(pdata.findIndex(p => p.id == id), 1);
        return pdata;
      })
    })
  }
}

