import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { RestaurantDetailComponent } from './components/restaurant-detail/restaurant-detail.component';
import { PageNotFoundComponent } from './components/error-pages/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', redirectTo: '/restaurants', pathMatch: 'full'},
  { path: 'restaurants', component:RestaurantsComponent},
  { path: 'restaurants/:slug', component:RestaurantDetailComponent },
  { path: '**', component:PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
