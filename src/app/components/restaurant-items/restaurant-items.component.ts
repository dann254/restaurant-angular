import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-items',
  templateUrl: './restaurant-items.component.html',
  styleUrls: ['./restaurant-items.component.scss']
})
export class RestaurantItemsComponent implements OnInit {
  @Input() response
  @Output() navigateDestination: EventEmitter<any> = new EventEmitter()

  pageCount:number
  current:number
  restaurants:Array<number>

  constructor() {}

  ngOnInit() {
    this.pageCount = this.response.total_pages
    this.current = this.response.current_page
    this.restaurants = this.response.results
  }

  newDestination(destination) {
    this.navigateDestination.emit(destination)
  }

}
