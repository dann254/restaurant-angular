import { Component, OnInit, Input } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-restaurant-item',
  templateUrl: './restaurant-item.component.html',
  styleUrls: ['./restaurant-item.component.scss']
})
export class RestaurantItemComponent implements OnInit {
  imageUrl = environment.unsplashUrl
  @Input() restaurant
  @Input() pos
  @Input() imgSelector

  faCommentAlt = faCommentAlt;
  status:string
  imgUrl:string
  imagerandomizer:number

  constructor(private router:Router) { }

  ngOnInit() {
    this.imagerandomizer = ((this.pos+1)*this.imgSelector) * 612

    this.imgUrl = this.imageUrl + "150x150/?sig=" + this.imagerandomizer
    if (this.restaurant.open) {
      this.status = "Open • Closes"
    } else {
      this.status = "Closed • Opens"
    }
  }

  convertTime(time) {
    let timeString = time;
    let H = +timeString.substr(0, 2);
    let h = H % 12 || 12;
    let ampm = (H < 12 || H === 24) ? "am" : "pm";
    timeString = h + timeString.substr(2, 3) + ampm;

    return timeString
  }

  restaurantClick(restaurant) {
    this.router.navigate(['/restaurants', restaurant.slug])
  }

  setClass() {
    let classes = {
      'open': this.restaurant.open
    }
    return classes
  }

}
