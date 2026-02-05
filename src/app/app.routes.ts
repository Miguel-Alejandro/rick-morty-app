import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Favorites } from './pages/favorites/favorites';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home').then((m) => m.Home)
    },
    {
        path: 'favorites',
        loadComponent: () => import('./pages/favorites/favorites').then((m) => m.Favorites)
    }
];
