
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {
  title      = 'Comments';
  diaHora = () => new Date().toLocaleString().replace(',','');
  words =["The sky", "above", "the port","was", "the color of television", "tuned", "to", "a dead channel", ".", "All", "this happened", "more or less","." ,"I", "had", "the story", "bit by bit", "from various people", "and", "as generally", "happens", "in such cases", "each time", "it", "was", "a different story","." ,"It", "was", "a pleasure", "to", "burn"];
  text = [];
  text2 = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex quam. Aenean suscipit ornare magna non fermentum. Cras consequat viverra dignissim. Praesent lacinia felis vitae nunc feugiat aliquam. Sed dictum enim eu augue vehicula, a volutpat neque vehicula.";
    // avatars
    avatarsUser = [
     'https://bootdey.com/img/Content/avatar/avatar2.png'
    ]
  // comment
  oneComment = {
    nameUser  : '',
    timeUser  : '',
    textUser  : ''

  };
  // comments arr
  allComments = [
    {nameUser: 'john rambo', timeUser: this.diaHora, textUser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex quam. Aenean suscipit ornare magna non fermentum. Cras consequat viverra dignissim. Praesent lacinia felis vitae'},
    {nameUser: 'john wick', timeUser: this.diaHora, textUser: ' nunc feugiat aliquam. Sed dictum enim eu augue vehicula, a volutpat neque vehicula.'},
    {nameUser: 'john wayne', timeUser: this.diaHora, textUser: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sodales ex quam. Aenean suscipit ornare magna non fermentum. Cras consequat viverra dignissim.'},
  ];
  // length comments
  longArr = this.allComments.length;
  // add comment
  aggregateMe(): void{
console.log('agregate works');

this.allComments.push({
                nameUser: this.oneComment.nameUser,
                timeUser: this.diaHora,
                textUser: this.oneComment.textUser
});
console.log(this.oneComment.nameUser);
console.log(this.oneComment.textUser);




  };
  // delete comment
  deleteMe(): void{
    console.log('delete works');
  };

  constructor() {}

  ngOnInit(): void {
    console.log(this.diaHora);
  }

}
