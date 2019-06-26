import { Component, OnInit } from '@angular/core';
// import { CommentComponent } from './comment/comment.component';
import * as moment from 'moment';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})

export class PostComponent implements OnInit {

  titulo: string;
  fecha: string;

  constructor() {

    this.titulo = "Título del post";
    this.fecha = moment().format('MMMM Do YYYY');

  }

  ngOnInit() {
  }

}
