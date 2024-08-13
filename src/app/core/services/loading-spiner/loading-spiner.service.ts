import { Injectable, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinerService {
  isLoading = signal<boolean>(false)
  start() {
    if (!this.isLoading()) {
      this.isLoading.set(true)
    }
  }
  stop() {
    if (this.isLoading()) this.isLoading.set(false)
  }
  constructor() { }
}
