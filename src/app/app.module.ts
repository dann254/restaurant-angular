import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { NavComponent } from './components/nav/nav.component';
import { FiltersComponent } from './components/filters/filters.component';
import { RestaurantItemComponent } from './components/restaurant-item/restaurant-item.component';
import { RestaurantItemsComponent } from './components/restaurant-items/restaurant-items.component';
import { RestaurantPaginatorComponent } from './components/restaurant-paginator/restaurant-paginator.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { PageNotFoundComponent } from './components/error-pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent,
    NavComponent,
    FiltersComponent,
    RestaurantItemComponent,
    RestaurantItemsComponent,
    RestaurantPaginatorComponent,
    RestaurantDetailComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    FontAwesomeModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.chasingDots,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)',
      backdropBorderRadius: '4px',
      primaryColour: '#2C7BE5',
      secondaryColour: '#D32323',
      tertiaryColour: '#ffffff'
    })
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
