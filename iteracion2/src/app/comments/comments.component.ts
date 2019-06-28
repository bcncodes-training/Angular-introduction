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
  comment4 = '';

  comments: Array<any> = [
    {
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
    }
  ];

  commentTrackerFunction(index: number, comment: any) {
    return comment.id;
  }

  fecha:string;

  constructor() {
    moment.locale('es');
    this.fecha = moment().format('LLL');
  }

  addComment(NewName: string, NewComment: string) {
    const elem = { id: this.comments.length + 1 , name: NewName, comment: NewComment, fecha: this.fecha };
    //this.comments.push(elem);
    this.comments = this.comments.concat(elem);
  }

  ngOnInit() {
    //this.date = moment();
  }

}
