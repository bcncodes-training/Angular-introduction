import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it02-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  comments ="Comments"
  user1 = "John"
  commentUser1 = "COMENTARIO NUMERO1"
  user2 = "Lisa"
  commentUser2 = "COMENTARIO NUMERO2"
  user3 = "Logan"
  commentUser3 = "COMENTARIO NUMERO3"

  constructor() { }

  ngOnInit() {
  }

}
