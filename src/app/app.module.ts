import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { appRoutes } from './app.routes';
import { ApiService } from './services/api.service';

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { NavComponent } from './parts/nav/nav.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { BasketComponent } from './parts/basket/basket.component';
import { PricingComponent } from './parts/pricing/pricing.component';
import { IndexBgComponent } from './parts/index-bg/index-bg.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    NavComponent,
    CatalogComponent,
    AboutComponent,
    ContactComponent,
    PageNotFoundComponent,
    BasketComponent,
    PricingComponent,
    IndexBgComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
