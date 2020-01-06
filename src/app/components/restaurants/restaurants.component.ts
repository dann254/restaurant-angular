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
  filterAttr:string = ''
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
  filterRestaurants(filters) {
    this.loading = true
    this.filterAttr = filters
    this.pageAttr = `page=1`
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
    if (this.filterAttr==='') {
      this.filters = `?${this.pageAttr}`
      console.log('>>>>>>>>>')
    }
    else {
      this.filters = `?${this.pageAttr}&${this.filterAttr}`
    }
  }

}
