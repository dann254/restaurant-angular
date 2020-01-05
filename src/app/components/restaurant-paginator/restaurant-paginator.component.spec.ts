import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantPaginatorComponent } from './restaurant-paginator.component';

describe('RestaurantPaginatorComponent', () => {
  let component: RestaurantPaginatorComponent;
  let fixture: ComponentFixture<RestaurantPaginatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantPaginatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
