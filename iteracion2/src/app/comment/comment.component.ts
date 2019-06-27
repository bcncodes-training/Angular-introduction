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
  commentCount: number = 0;
  commentBoxIsVisible = false;

  constructor() {
    this.newComment("David", "Hola mundo!", "20171122");
    this.newComment("Groot", "I am Groot!", '20121221');
    this.newComment("Hodor", "HODOR!!");

    this.newCommentAuthor = '';
    this.newCommentContent = '';

  }

  /**
   * Añade un nuevo comentario  con fecha actual
   *
   * @param newAutor
   * @param newContenido
   * @param newDate Opcional. Si no se especifica utilizará la fecha actual
   */
  newComment(newAutor: string, newContenido: string, newDate?: string) {

    if (newDate) {
      this.comments.push({
        id: this.commentCount++,
        fecha: moment(newDate).format('MMMM Do YYYY'),
        contenido: newContenido,
        autor: newAutor
      });
    } else {
      this.comments.push({
        id: this.commentCount++,
        fecha: moment().format('MMMM Do YYYY'),
        contenido: newContenido,
        autor: newAutor
      });
    }

  }

  enviarComentario() {
    // Se lanza al pulsar el boton de enviar en el formulario

    // alert(`Autor: ${this.newCommentAuthor}\nContenido: ${this.newCommentContent}`);
    this.newComment(this.newCommentAuthor, this.newCommentContent);

    this.newCommentAuthor = '';
    this.newCommentContent = '';
    this.toggleCommentBoxVisibility();


  }

  commentTrackerFunction(index: number, comment: any) {
    return comment.id;
  }

  toggleCommentBoxVisibility() {
    this.commentBoxIsVisible = !this.commentBoxIsVisible;
  }

  ngOnInit() {
  }

}
