import { AsyncPipe } from '@angular/common';
import { Component, input, OnInit, Injector } from '@angular/core';
import { ProductsService } from 'core/services/products/products.service';
import { debounceTime, map, Observable, switchMap, tap } from 'rxjs';
import { PaginationComponent } from 'shared/components/pagination/pagination.component';
import { SearchService } from 'core/services/search/search.service';
import { CategoryFilterComponent } from './category-filter/category-filter.component';
import { AddToCartService } from 'core/services/add-to-cart/add-to-cart.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, PaginationComponent, CategoryFilterComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products$ !: Observable<any>
  totalPages: number = 0;
  currentPage: number = 1;
  limit: number = 10;

  constructor(
    private productService: ProductsService,
    private injector: Injector,
    private searchS: SearchService,
    public addToCart: AddToCartService
  ) {

  }

  ngOnInit() {
    this.fetchProducts(this.currentPage);
  }

  fetchProducts(page: number) {
    const skip = (page - 1) * this.limit;
    this.products$ = this.searchS.searchTerm$.pipe(
      debounceTime(600),
      switchMap((searchTerm: string) => {
        return this.productService.fetchProducts(skip, this.limit)
          .pipe(tap((res: any) => this.totalPages = Math.ceil(res.total / this.limit)),
            map(res => {
              if (!searchTerm) {
                return res.products;
              }
              return res.products.filter((product: any) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

            }))
      }))
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchProducts(page);
  }
}
