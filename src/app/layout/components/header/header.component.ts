import { AsyncPipe } from '@angular/common';
import { Component, inject, OnInit, signal } from '@angular/core';
import { AddToCartService } from 'core/services/add-to-cart/add-to-cart.service';
import { AuthService } from 'core/services/API/auth/auth.service';
import { SearchService } from 'core/services/search/search.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  search = signal(false)

  searchService = inject(SearchService);


  constructor(public auth: AuthService, public addToCart: AddToCartService) { }
  ngOnInit(): void {

    this.auth.token.next(localStorage.getItem('authToken'))
  }



}
