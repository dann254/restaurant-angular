import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA  } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgxLoadingModule, ngxLoadingAnimationTypes } from 'ngx-loading';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { NgxStarRatingModule } from 'ngx-star-rating';

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
import { SubmitRatingsComponent } from './components/submit-ratings/submit-ratings.component';
import { ViewRatingComponent } from './components/view-rating/view-rating.component';
import { ViewReviewsComponent } from './components/view-reviews/view-reviews.component';

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
    PageNotFoundComponent,
    SubmitRatingsComponent,
    ViewRatingComponent,
    ViewReviewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxStarRatingModule,
    FormsModule,
    ReactiveFormsModule,
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
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
