import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const token = localStorage.getItem('authToken');

  if (token) {
    return true;  // Allow access if token exists
  } else {
    router.navigate(['login']);
    return false;  // Redirect to login if token does not exist
  }
};
