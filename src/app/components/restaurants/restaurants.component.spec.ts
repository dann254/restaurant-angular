import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsComponent } from './restaurants.component';
import { RestaurantItemsComponent } from '../restaurant-items/restaurant-items.component';
import { FiltersComponent } from '../filters/filters.component';

describe('RestaurantsComponent', () => {
  let component: RestaurantsComponent;
  let fixture: ComponentFixture<RestaurantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RestaurantsComponent,
        FiltersComponent,
        RestaurantItemsComponent,
       ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
