import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})

export class CommentComponent implements OnInit {

  newCommentAuthor: string;
  newCommentContent: string;
  comments = [];
  botonDesactivado = false;

  constructor() {
    this.comments.push({
      fecha: moment('20161111').format('MMMM Do YYYY'),
      contenido: 'hola mundo!',
      autor: 'David'
    });

    this.comments.push({
      fecha: moment('20140622').format('MMMM Do YYYY'),
      contenido: 'I am Groot!',
      autor: 'Groot'
    });

    this.comments.push({
      fecha: moment('20171230').format('MMMM Do YYYY'),
      contenido: 'HODOR!',
      autor: 'Hodor'
    });
  }

  mostrarAviso() {
    alert("Autor: " + this.newCommentAuthor + "\nContenido: " + this.newCommentContent);
  }

  ngOnInit() {
  }

}
