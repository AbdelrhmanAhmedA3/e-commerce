import { NgFor } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, ReactiveFormsModule, FormControl } from '@angular/forms';
import { CategoryListService } from 'core/services/API/category-list/category-list.service';
import { ProductsService } from 'core/services/API/products/products.service';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-category-filter',
  standalone: true,
  imports: [ReactiveFormsModule, NgFor],
  templateUrl: './category-filter.component.html',
  styleUrl: './category-filter.component.scss'
})
export class CategoryFilterComponent implements OnInit {
  categories: string[] = [];
  @Output() onCategoryChange = new EventEmitter<string>()
  constructor(private categoryService: CategoryListService) { }

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

}
