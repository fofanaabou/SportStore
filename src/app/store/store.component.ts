import {Component, computed, signal, Signal} from '@angular/core';
import {Product} from "../model/Product";
import {ProductRepository} from "../model/product.repository";
import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf} from "@angular/common";
import { CounterDirective } from './counter.directive';
import { CartModel, CartSummary } from '../model/cart.model';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';

@Component({
  selector: 'app-store',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    CommonModule,
    CounterDirective,
    CartSummaryComponent, 
  ],
  templateUrl: './store.component.html',
  styleUrl: './store.component.css'
})
export class StoreComponent {

  products: Signal<Product[]>;
  categories: Signal<string[]>;
  selectedCategory = signal<string | undefined>(undefined)
  productsPerPage = signal(2);
  selectedPage = signal(1);
  pagedProducts: Signal<Product[]>;
  pageNumbers: Signal<number[]>;
  pageCount: Signal<number>;
  summary: Signal<CartSummary>
  constructor(public repository: ProductRepository, private cart: CartModel) {
    this.products = computed(() => {
      if (this.selectedCategory() == undefined) {
        return this.repository.products();
      } else {
        return this.repository.products()
          .filter(p => p.category === this.selectedCategory())
      }
    });

    this.categories = repository.categories;

    let pageIndex = computed(() => {
      return (this.selectedPage() - 1) * this.productsPerPage()
    });

    this.pagedProducts = computed(() => {
      return this.products().slice(pageIndex(), pageIndex() + this.productsPerPage());
    });

    this.pageNumbers = computed(() => {
      return Array(Math.ceil(this.products().length / this.productsPerPage()))
        .fill(0).map((x, i) => i + 1);
    });
    this.pageCount = computed(() => {
      return Math.ceil(this.products().length / this.productsPerPage());
    });
    
    this.summary = cart.summary;
    
  }
  

  changeCategory(newCategory?: string) {
    this.selectedCategory.set(newCategory);
    this.changePage(1)
  }

  changePageSize(newSize: number) {
    this.productsPerPage.set(Number(newSize));
    this.changePage(1);
  }

  changePage(newPage: number) {
    this.selectedPage.set(newPage);
  }
  
  addProductToCart(product: Product) {
    this.cart.addLine(product) 
  }
}
