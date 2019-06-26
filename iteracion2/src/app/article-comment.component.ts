import { Component } from '@angular/core';

@Component({
  selector: 'it-two-article-comment',
  templateUrl: './article-comment.component.html',
  styleUrls: ['./app.component.css']
})
export class CommentsComponent {
  comments = [
    {
      author: 'Katty',
      date: ' 25/04/2018 15:26',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum, ligula sit amet dictum blandit, justo purus venenatis nisl, eu facilisis nisi augue vitae ex. Nunc sollicitudin dignissim nibh. In turpis ex, pellentesque eget sodales at, consequat at diam. Nulla egestas lacinia sem, quis imperdiet orci. Nullam pulvinar erat eu.'
    },
    {
      author: 'Salomon',
      date: ' 13/02/2019 15:26',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum, ligula sit amet dictum blandit, justo purus venenatis nisl, eu facilisis nisi augue vitae ex. Nunc sollicitudin dignissim nibh. In turpis ex, pellentesque eget sodales at, consequat at diam. Nulla egestas lacinia sem, quis imperdiet orci. Nullam pulvinar erat eu.'
    },
    {
      author: 'Bondary',
      date: ' 10/03/2019 15:26',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum, ligula sit amet dictum blandit, justo purus venenatis nisl, eu facilisis nisi augue vitae ex. Nunc sollicitudin dignissim nibh. In turpis ex, pellentesque eget sodales at, consequat at diam. Nulla egestas lacinia sem, quis imperdiet orci. Nullam pulvinar erat eu.'
    }
  ];
}
