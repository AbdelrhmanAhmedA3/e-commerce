import { Routes } from '@angular/router';
import { authGuard } from 'core/guards/auth/auth.guard';
import { MainComponent } from 'layout/main/main.component';

export const routes: Routes = [
    {
        path: '', pathMatch: 'full', redirectTo: 'login'
    },
    {
        path: '',
        title: 'home',
        component: MainComponent,
        children: [
            {
                path: 'login',
                loadComponent: () => import('pages/auth/auth.component').then(c => c.AuthComponent),


            },
            {
                path: 'products',
                loadComponent: () => import('pages/products/products.component').then(c => c.ProductsComponent),
                canActivate: [authGuard]

            },
            {
                path: '**',
                redirectTo: 'login'
            }
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }

];
