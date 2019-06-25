import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  user1 = 'Katy';
  user2 = 'Salomon';
  user3 = 'Bondary';
  comment1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo, a gravida mi. Duis id tellus risus. Aliquam id convallis magna. Nam egestas mauris non neque dapibus, quis congue enim mollis. ';
  comment2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo';
  comment3 = 'Lorem ipsum dolor sit amet, consectetur';

  date: moment.Moment;

  constructor() {}

  ngOnInit() {
    this.date = moment();
  }

}
