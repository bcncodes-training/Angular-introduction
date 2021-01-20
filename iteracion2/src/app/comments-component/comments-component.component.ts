import { Component, OnInit } from '@angular/core';
import {allComments} from '../shared/comments.data';
@Component({
  selector: 'pr-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
	// you help me
  title      = 'Ejercicio de MEAN-STACK @cifo "La Violeta"';
  diaHora = () => new Date().toLocaleString().replace(',','');
  public allComments: any [] = [];

  constructor() {
    this.allComments = allComments;
  }
  // comment
  nameUser: string = "";
  textUser: string = "";
  timeUser: string = "";

  // avatars
  avatarsUser: string = 'https://bootdey.com/img/Content/avatar/avatar2.png';

  // comments arr
 /*  allComments: any [] = [
    {nameUser: 'john rambo', timeUser: this.diaHora(), textUser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex quam. Aenean suscipit ornare magna non fermentum. Cras consequat viverra dignissim. Praesent lacinia felis vitae'},
    {nameUser: 'john wick', timeUser: this.diaHora(), textUser: ' nunc feugiat aliquam. Sed dictum enim eu augue vehicula, a volutpat neque vehicula.'},
    {nameUser: 'john wayne', timeUser: this.diaHora(), textUser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex quam. Aenean suscipit ornare magna non fermentum. Cras consequat viverra dignissim.'},
  ]; */
  // length comments
  longArr: number = this.allComments.length;
  // add comment
  aggregateMe() {
// aux comments to push it all and no one by one
let commentAux = {
	nameUser: this.nameUser,
	timeUser: this.diaHora(),
	textUser: this.textUser
}
this.allComments.push(commentAux);

  };
  // delete comment
  deleteMe(num: number): void{

    this.allComments.splice(num, 1);
  };



  ngOnInit(): void {
    console.log(this.diaHora());
  }

}
