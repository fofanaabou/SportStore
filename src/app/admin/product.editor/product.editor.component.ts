import { Component } from '@angular/core';
import { ProductRepository } from '../../model/product.repository';
import {ActivatedRoute, Router } from '@angular/router';
import { Product } from '../../model/Product';
import { MaterialFeatures } from '../material.features';
import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-product.editor',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    FormsModule,
    CommonModule,
    MaterialFeatures
  ],
  templateUrl: './product.editor.component.html',
  styleUrl: './product.editor.component.css'
})
export class ProductEditorComponent {

  editing: boolean = false;
  product: Product = new Product();

  constructor(private repository: ProductRepository, private router: Router, private activeRoute: ActivatedRoute) {
    this.editing = activeRoute.snapshot.params["mode"] == "edit";
    if(this.editing) {
      Object.assign(this.product, repository.getProduct(this.activeRoute.snapshot.params["id"]));
    }
  }

  save() {
    this.repository.saveProduct(this.product);
    this.router.navigateByUrl("/admin/main/products");
  }
}
