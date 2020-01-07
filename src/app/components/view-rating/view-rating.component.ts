import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-rating',
  templateUrl: './view-rating.component.html',
  styleUrls: ['./view-rating.component.scss']
})
export class ViewRatingComponent implements OnInit {
  @Input() rating
  starOne:string = 'star-empty'
  starTwo:string = 'star-empty'
  starThree:string = 'star-empty'
  starFour:string = 'star-empty'
  starFive:string = 'star-empty'

  constructor() { }

  ngOnInit() {
    this.generateRatings()
  }

  generateRatings() {
    let str = this.rating.toString().split(".")
    let whole = Number(str[0])
    let half = Number(str[1])
    let wholeArray = [...Array(whole).keys()]

    for (let i = 0; i < 5; i++) {
      if (wholeArray.includes(i) && i === 0){
        this.starOne = 'star-full'
      }
      else if (wholeArray.includes(i) && i === 1){
        this.starTwo = 'star-full'
      }
      else if (wholeArray.includes(i) && i === 2){
        this.starThree = 'star-full'
      }
      else if (wholeArray.includes(i) && i === 3){
        this.starFour = 'star-full'
      }
      else if (wholeArray.includes(i) && i === 4){
        this.starFive = 'star-full'
      }

      else if (i >= whole && half > 0) {
        if (whole === 0){
          this.starOne = 'star-half'
        }
        if (whole === 1){
          this.starTwo = 'star-half'
        }
        if (whole === 2){
          this.starThree = 'star-half'
        }
        if (whole === 3){
          this.starFour = 'star-half'
        }
        if (whole === 4){
          this.starFive = 'star-half'
        }
      }
    }

  }

}
