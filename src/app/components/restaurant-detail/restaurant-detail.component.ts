import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantService } from '../../services/restaurant.service'
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { environment } from '../../../environments/environment';
declare var $:any;

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss']
})
export class RestaurantDetailComponent implements OnInit {
  faCommentAlt = faCommentAlt;
  slug:string
  loading:boolean = false
  restaurant:any
  imgUrl:string
  imagerandomizer:number
  imageUrl = environment.unsplashUrl
  status:string
  showHazina:boolean = false
  redeemed:boolean = false


  constructor(private route: ActivatedRoute, private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.loading = true
    let imagerandomizer = Math.floor(Math.random() * 612)
    this.imgUrl = this.imageUrl + "800x150/?sig=" + imagerandomizer
    this.slug = this.route.snapshot.paramMap.get('slug')
    this.getRestaurantRequest()
  }

  getRestaurantRequest() {
    this.restaurantService.getRestaurant(this.slug).subscribe(restaurant =>{
      this.restaurant = restaurant
      this.loading = false

      if (this.restaurant.open) {
        this.status = "Open • Closes"
      } else {
        this.status = "Closed • Opens"
      }
    })
  }

  convertTime(time) {
    let timeString = time;
    let H = +timeString.substr(0, 2);
    let h = H % 12 || 12;
    let ampm = (H < 12 || H === 24) ? "am" : "pm";
    timeString = h + timeString.substr(2, 3) + ampm;

    return timeString
  }

  refreshDetail() {
    this.loading = true
    this.getRestaurantRequest()
  }

  setClass() {
    let classes = {
      'open': this.restaurant.open
    }
    return classes
  }

}
