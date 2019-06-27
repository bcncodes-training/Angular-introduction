import { Component, OnInit } from '@angular/core';
import { comments } from '../comments';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  title = 'Comments:';
  comments = comments;


  constructor() {}

  ngOnInit() {
  }

}


