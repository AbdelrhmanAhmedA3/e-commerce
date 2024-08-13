import { AsyncPipe, JsonPipe } from '@angular/common';
import { Component, input, OnInit, Injector } from '@angular/core';
import { ProductsService } from 'core/services/API/products/products.service';
import { BehaviorSubject, debounceTime, finalize, map, Observable, switchMap, tap } from 'rxjs';
import { PaginationComponent } from 'shared/components/pagination/pagination.component';
import { SearchService } from 'core/services/search/search.service';
import { CategoryFilterComponent } from './components/category-filter/category-filter.component';
import { AddToCartService } from 'core/services/add-to-cart/add-to-cart.service';
import { LoadingSpinnerComponent } from 'shared/components/loading-spinner/loading-spinner.component';
import { LoadingSpinerService } from 'core/services/loading-spiner/loading-spiner.service';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [AsyncPipe, PaginationComponent, CategoryFilterComponent, LoadingSpinnerComponent, JsonPipe],
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
    private searchS: SearchService,
    public addToCart: AddToCartService,
    private loadingSpiner: LoadingSpinerService
  ) {

  }

  ngOnInit() {
    this.fetchProducts(this.currentPage);
  }

  fetchProducts(page: number) {
    const skip = (page - 1) * this.limit;
    this.loadingSpiner.start()
    this.products$ = this.searchS.searchTerm$.pipe(
      debounceTime(600),
      switchMap((searchTerm: string) => {
        return this.productService.fetchProducts(skip, this.limit, searchTerm)
          .pipe(tap((res: any) => this.totalPages = Math.ceil(res.total / this.limit)),
            map(res => {
              return res.products
            }), finalize(() => this.loadingSpiner.stop()))
      }))
  }
  onGetCategory(category: string) {

    const skip = (this.currentPage - 1) * this.limit;


    if (category == 'all') {
      this.fetchProducts(this.currentPage)
      return
    }
    this.loadingSpiner.start()
    this.products$ = this.searchS.searchTerm$.pipe(
      debounceTime(600),
      switchMap((searchTerm: string) => {
        return this.productService.fetchProductByCategory(skip, this.limit, category)
          .pipe(tap((res: any) => this.totalPages = Math.ceil(res.total / this.limit)),
            map(res => {
              if (!searchTerm) {
                return res.products;
              }
              return res.products.filter((product: any) => product.title.toLowerCase().includes(searchTerm.toLowerCase()))

            }), finalize(() => this.loadingSpiner.stop()))
      })
    )


    // console.log(category);


  }
  onPageChange(page: number) {
    this.currentPage = page;
    this.fetchProducts(page);
  }
}
