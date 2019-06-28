import { Component, OnInit, Input } from '@angular/core';
import *as moment from 'moment' // busca todo lo que tiene la libreria moment y le asocia el nombre de moment

@Component({
  selector: 'it02-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {

  commentsHeader ="Comments"
  Arrcomments: Array<Object> = [
  {
    user:'John',
    date: '15-07-2018',
    comentario:'COMENTARIO NUMERO1'
  },
  {
    user : "Lisa",
    date: moment().format("15-06-2018"),
    comentario : "COMENTARIO NUMERO2",

  },
  {
    user : "Logan",
    date :  moment().format("15-05-2018"),
    comentario : "COMENTARIO NUMERO3"
  }
  ]
 values = '';
 obj = {
   user:'',
   date:'',
   comentario:'',
 };

 addName(event:any){
   this.values = event.target.value;
   this.obj.user = this.values;

    }

  submit(){
    this.Arrcomments.push(this.obj)
  }


  constructor() { }

  ngOnInit() {
  }

}
