import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
	// you help me
  title      = 'Comments';
  diaHora = () => new Date().toLocaleString().replace(',','');
  // comment
  nameUser: any;
  textUser: any;
  timeUser: any;

  // comments arr
  allComments: any [] = [
    {nameUser: 'john rambo', timeUser: this.diaHora(), textUser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex quam. Aenean suscipit ornare magna non fermentum. Cras consequat viverra dignissim. Praesent lacinia felis vitae'},
    {nameUser: 'john wick', timeUser: this.diaHora(), textUser: ' nunc feugiat aliquam. Sed dictum enim eu augue vehicula, a volutpat neque vehicula.'},
    {nameUser: 'john wayne', timeUser: this.diaHora(), textUser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex quam. Aenean suscipit ornare magna non fermentum. Cras consequat viverra dignissim.'},
  ];
  // length comments
  longArr = this.allComments.length;
  // add comment
  aggregateMe() {
console.log('agregate works');
console.log(this.nameUser);
console.log(this.textUser);
// aux comments to push it all and no one by one
let commentAux = {
	nameUser: this.nameUser,
	timeUser: this.diaHora,
	textUser: this.textUser
}
this.allComments.push(commentAux);


  };
  // delete comment
  deleteMe(): void{
    console.log('delete works');
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.diaHora());
  }

}
