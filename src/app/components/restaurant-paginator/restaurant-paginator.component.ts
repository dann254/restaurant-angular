import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-restaurant-paginator',
  templateUrl: './restaurant-paginator.component.html',
  styleUrls: ['./restaurant-paginator.component.scss']
})
export class RestaurantPaginatorComponent implements OnInit {
  @Input() pageCount
  @Input() current
  @Input() totalRestaurants
  @Output() newDestination: EventEmitter<any> = new EventEmitter()

  next:number
  prev:number
  pages:number[]
  nextActive:string
  prevActive:string
  shownStart:number
  shownEnd:number


  constructor() { }

  ngOnInit() {
    this.pages = [...Array(this.pageCount).keys()]
    this.next = this.current + 1
    this.prev = this.current - 1
    if (this.next > this.pageCount){
      this.nextActive = 'disabled'
    }
    if (this.prev < 1){
      this.prevActive = 'disabled'
    }
    this.initializeCounterSummary()
  }

  initializeCounterSummary() {
    this.shownStart = (this.current * 10) - 9
    this.shownEnd = this.current * 10

    if (this.shownEnd > this.totalRestaurants) {
      this.shownEnd = this.totalRestaurants
    }
  }
  onClick(destination) {
    this.newDestination.emit(destination)
  }

}
