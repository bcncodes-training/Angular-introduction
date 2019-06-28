import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import {comments} from '../shared/data/comments.data';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  userName: string = '';
  fecha: string;

  public comments: Array<any>;

  constructor() {
    this.comments = comments;

    moment.locale('es');
    this.fecha = moment().format('LLL');
  }

  trackByCommentId(comment: any):string{
    return comment.id;
  }


  addComment(event:any, formulario:any):void {

    //const elem = { id: this.comments.length + 1 , name: NewName, comment: NewComment, fecha: this.fecha };
    //this.comments.push(elem);
    //this.comments = this.comments.concat(elem);

    event.preventDefault();

    this.comments.push({
      id: this.comments.length + 1,
      name: formulario[0].value,
      comment: formulario[1].value,
      fecha: this.fecha
    });

    formulario.reset();
  }


  /*

  addComment(event: any, formulario: any): void {

    event.preventDefault();

    const comentario = {
      id: this.comments.length + 1,
      name: formulario[0].value,
      comment: formulario[1].value,
      fecha: this.fecha
    };

    this.comments = [{
        id: 1,
        name: 'Katy',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
        fecha: '25/06/2019'
      },
      {
        id: 2,
        name: 'Luke',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
        fecha: '25/06/2019'
      },
      {
        id: 3,
        name: 'Han',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
        fecha: '25/06/2019'
      },
      {
        id: 4,
        name: 'Leia',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo',
        fecha: '25/06/2019'
      }, comentario];

    formulario.reset();
  }

  */

  ngOnInit() {

  }

}
