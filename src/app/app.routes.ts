import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutComponent } from './pages/about/about.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { IndexComponent } from './pages/index/index.component';

import { Route } from '@angular/router';


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
  },
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];
