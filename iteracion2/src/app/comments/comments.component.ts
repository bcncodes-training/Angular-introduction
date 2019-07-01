import { Component, OnInit } from '@angular/core';
import { comments } from '../shared/data/comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  title = 'Comments:';
  comments = [];


  constructor() {
    this.comments=comments;
  }
  commentTrackerFunction(index: number, comment: any) {
    return comment.id;
  }

  ngOnInit() {
  }

}


