import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faSearch, faCaretDown, faTimes } from '@fortawesome/free-solid-svg-icons';
declare var $:any;

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  @Output() filterRestaurants: EventEmitter<any> = new EventEmitter()

  faSearch = faSearch;
  faCaretDown = faCaretDown;
  faTimes = faTimes;
  fullFilter:string = ''
  searchQuery:string = ''
  is_open:string = ''
  weekday:string = ''
  hour:string = ''
  subFilterClicked:boolean = false
  hasFilters:boolean = false
  filterText:string = 'Any time'

  weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  hours = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '2:00', '21:00', '22:00', '23:00']

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.hasFilters = true
    this.filterEmmitter()
  }

  onFilterClick(status, day, hour, text){
    this.is_open = status
    this.weekday = day
    this.hour = hour
    this.hasFilters = true
    this.filterText = text
    this.filterEmmitter()
  }

  filterEmmitter() {
    this.buildFilter()
    console.log(this.fullFilter)
    this.fullFilter = this.fullFilter.substr(1);
    console.log(this.fullFilter)
    this.filterRestaurants.emit(this.fullFilter)
  }

  buildFilter() {
    this.fullFilter = ''

    if (this.is_open !== '') {
      this.fullFilter = `${this.fullFilter}&is_open=${this.is_open}`
    }
    if (this.weekday !== '') {
      this.fullFilter = `${this.fullFilter}&weekday=${this.weekday}`
    }
    if (this.hour !== '') {
      this.fullFilter = `${this.fullFilter}&time=${this.hour}`
    }
    if (this.searchQuery !== '') {
      this.fullFilter = `${this.fullFilter}&search=${this.searchQuery}`
    }

    if (this.fullFilter === '')
      this.hasFilters = false
  }

  onClearFilter() {
    this.is_open = ""
    this.weekday = ""
    this.hour = ""
    this.searchQuery = ""
    this.filterText = 'Any time'

    this.filterEmmitter()
  }

  onFilterHover(id) {
    this.subFilterClicked = !this.subFilterClicked
    $(`#${id}`).addClass('current');
  }
  onFilterHoverOff(id) {
    this.subFilterClicked = !this.subFilterClicked
    $(`#${id}`).removeClass('current');
  }

  setSuperSubClasses() {
    let classes = {
      'sub-filter-show': this.subFilterClicked
    }
    return classes
  }
  setClearClass() {
      return {
        'filter-active': this.hasFilters
      }
  }
  setActiveFilterClass() {
    return {
      'btn-glow': this.hasFilters
    }
  }

}
