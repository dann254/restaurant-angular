import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { RestaurantService } from './restaurant.service';

describe('RestaurantService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
        HttpClientTestingModule,
    ],
  }));

  it('should be created', () => {
    const service: RestaurantService = TestBed.get(RestaurantService);
    expect(service).toBeTruthy();
  });
});
