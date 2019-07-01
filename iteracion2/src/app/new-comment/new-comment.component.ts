import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import * as moment from 'moment';
import { comments } from '../shared/data/comments';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent implements OnInit {
  title = 'Add your comment';
  name = 'Name:';
  newName = '';
  msg = 'Description:';
  newMsg = '';
  submit = 'Submit';
  date: string;

  constructor() {
    this.date = moment().format('DD/MM/YYYY HH:mm'); //da formato a la fecha actual
  }
  inFocusOut(e) {
    this.newName = e.target.value;
  }
  taFocusOut(e) {
    this.newMsg = e.target.value;
  }
  addMessage(event:any, formulario:any):void{
    event.preventDefault();
    comments.splice(0,0,{ name: this.newName, date: this.date, msg: this.newMsg });
    formulario.reset();
  }

  ngOnInit() {
  }

}
