import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { format } from 'util';
@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  user1 = 'Pepe';
  user2 = 'Pepa';
  user3 = 'Pepita';
  comment1 = ' mauris non neque dapibus, quis congue enim mollis.';
  comment2 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in cursus leo';
  comment3 = 'Lorem ipsum dolor sit amet, consectetur';
  comment4 = '';

  fecha: string;

  constructor() {
    moment.locale('es');
    this.fecha = moment().format('LLL');
   }

  ngOnInit() {
  }

}
