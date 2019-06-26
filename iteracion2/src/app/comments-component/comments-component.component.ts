import { Component, OnInit } from '@angular/core';
import *as moment from 'moment' // busca todo lo que tiene la libreria moment y le asocia el nombre de moment

@Component({
  selector: 'it02-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  comments ="Comments"
  user1 = "John"
  commentUser1 = "COMENTARIO NUMERO1"
  fecha1 : any = moment().format("15-07-2018");
  user2 = "Lisa"
  commentUser2 = "COMENTARIO NUMERO2"
  fecha2 : any = moment().format("15-06-2018");
  user3 = "Logan"
  commentUser3 = "COMENTARIO NUMERO3"
  fecha3 : any = moment().format("15-05-2018");


  constructor() { }

  ngOnInit() {
  }

}
