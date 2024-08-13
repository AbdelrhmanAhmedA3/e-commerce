import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryListService } from 'core/services/API/category-list/category-list.service';
import { ProductCategory } from 'core/services/models/ProductCategory/product-category';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss'
})
export class CategoryFilterComponent implements OnInit {
  categories: ProductCategory[] = [];
  @Output() onCategoryChange = new EventEmitter<ProductCategory | string>()
  constructor(private categoryService: CategoryListService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
