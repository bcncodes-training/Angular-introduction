import { Component, OnInit } from '@angular/core';
import { comments } from '../comments';
import * as moment from 'moment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  title = 'Comments:';
  comments=comments;
  now1=moment().format('DD/MM/YYYY HH:mm');

  constructor() {}

  ngOnInit() {
  }

}


