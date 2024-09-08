import {Component, IterableDiffer, IterableDiffers, ViewChild} from '@angular/core';
import {MaterialFeatures} from '../material.features';
import {CommonModule, CurrencyPipe, NgFor, NgForOf, NgIf} from '@angular/common';
import {MatTableDataSource} from '@angular/material/table';
import {Product} from '../../model/Product';
import {ProductRepository} from '../../model/product.repository';
import {RouterModule} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';

@Component({
  selector: 'app-product.table',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgForOf,
    NgIf,
    NgFor,
    RouterModule,
    CommonModule,
    MaterialFeatures
  ],
  templateUrl: './product.table.component.html',
  styleUrl: './product.table.component.css'
})
export class ProductTableComponent {

  colsAndRows: string[] = ['id', 'name', 'category', 'price', 'buttons'];
  dataSource = new MatTableDataSource<Product>(this.repository.products());
  differ: IterableDiffer<Product>;

  constructor(private repository: ProductRepository, differs: IterableDiffers) {
    this.differ = differs.find(this.repository.products()).create();
  }

  ngDoCheck() {
    let changes = this.differ?.diff(this.repository.products());
    if (changes != null) {
      this.dataSource.data = this.repository.products();
    }
  }

  deleteProduct(id: number) {
    this.repository.deleteProduct(id);
  }

  @ViewChild(MatPaginator)
  paginator?: MatPaginator

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }
}
