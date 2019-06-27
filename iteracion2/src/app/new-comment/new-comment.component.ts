import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  title = 'Add your comment';
  name = 'Name:';
  msg = 'Description:';
  submit = 'Submit';
  date: string;

  constructor() {
    this.date = moment().format('DD/MM/YYYY HH:mm'); //da formato a la fecha actual
  }

  ngOnInit() {
  }

}
