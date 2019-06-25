import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  title='Add your comment';
  name='Name:';
  msg='Description:';
  submit='Submit';
  constructor() { }

  ngOnInit() {
  }

}
