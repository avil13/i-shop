import { Route } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';




// Роутер
export const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'index', // '/forms/personal-data',
    pathMatch: 'full'
  },
  // ---
  {
    path: 'index',
    component: IndexComponent
  }
];
