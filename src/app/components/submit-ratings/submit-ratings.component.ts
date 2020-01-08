import { Component, OnInit, Input, EventEmitter, Output  } from '@angular/core';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import { RestaurantService } from '../../services/restaurant.service'
declare var $:any;

@Component({
  selector: 'app-submit-ratings',
  templateUrl: './submit-ratings.component.html',
  styleUrls: ['./submit-ratings.component.scss']
})
export class SubmitRatingsComponent implements OnInit {
  public form: FormGroup;
  @Input() restaurant
  @Output() refreshDetail: EventEmitter<any> = new EventEmitter()
  loading:boolean = false
  ratings:number = 0
  review:string = ''
  faCommentAlt = faCommentAlt;

  reviewRequired:boolean = false
  slug:string

  constructor(private fb: FormBuilder, private restaurantService:RestaurantService, private router:Router) {
    this.form = this.fb.group({
      rating: [this.ratings, Validators.required],
    })
  }

  ngOnInit() {
    this.slug = this.restaurant.slug
  }

  clearModal() {
    this.form = this.fb.group({
      rating: [this.ratings, Validators.required],
    })
    this.review = ''
  }

  submitRating() {
    this.ratings = this.form.value.rating

    if (this.review === '') {
      this.reviewRequired = true
    }
    else {
      this.reviewRestaurantRequest()
    }
  }

  reviewRestaurantRequest() {
    this.loading = true
    let data = {
      review: this.review,
      rating: this.ratings
    }
    this.restaurantService.reviewRestaurant(this.slug, data).subscribe(response =>{
      $('#reviewModal').modal('hide');
      this.loading = false
      this.refreshDetail.emit()
    })
  }

}
