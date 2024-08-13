import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddToCartService {

  totalNumber: number = 0;

  constructor() { }

  increment() {
    this.totalNumber++;
  }

}
