import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => 
      import('./inicio/presentation/home-view/home-view.component').then(
        (m) => m.HomeViewComponent
      )
  }
];
