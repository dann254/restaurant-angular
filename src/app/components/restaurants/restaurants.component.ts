import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../../services/restaurant.service'

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {
  loading:boolean = false
  response:any
  pageAttr:string = ''
  filters:string = ''

  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.loading = true
    this.getRestaurantsRequest()
  }

  navigateDestination(destination) {
    this.loading = true
    this.pageAttr = `page=${destination}`
    this.buildFilters()
    this.getRestaurantsRequest()

  }

  getRestaurantsRequest() {
    this.restaurantService.getRestaurants(this.filters).subscribe(restaurants =>{
      this.response = restaurants
      this.loading = false
    })
  }

  buildFilters() {
    this.filters = `?${this.pageAttr}`
  }

}
