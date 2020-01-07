import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-reviews',
  templateUrl: './view-reviews.component.html',
  styleUrls: ['./view-reviews.component.scss']
})
export class ViewReviewsComponent implements OnInit {
  @Input() reviews

  constructor() { }

  ngOnInit() {
  }
  reviewDate(day){
    let d = new Date(day)
    let datestring = d.getDate() + '-' +  (d.getMonth()+1) + '-' + d.getFullYear()
    return datestring
  }

}
