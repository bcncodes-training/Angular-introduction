import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'pr-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  title = 'Comments:';
  comments = [
    {
      name: 'Katty',
      date: '17/06/2019 12:37',
      msg: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
    },
    {
      name: 'Salomon',
      date: '16/06/2019 18:06',
      msg: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
    },
    {
      name: 'Bondary',
      date: '16/06/2019 14:37',
      msg: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
    }
  ];
  now1 = moment().format('DD/MM/YYYY HH:mm');

  titleForm = 'Add your comment';
  name = 'Name:';
  msg = 'Description:';
  submit = 'Submit';

  addComment(evento, nombre, mensaje,formulario) {
    evento.preventDefault();
    this.comments = [
      {
        name: 'Katty',
        date: '17/06/2019 12:37',
        msg: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.'
      },
      {
        name: 'Salomon',
        date: '16/06/2019 18:06',
        msg: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?'
      },
      {
        name: 'Bondary',
        date: '16/06/2019 14:37',
        msg: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.'
      },
      {
        name: nombre.value,
        date: this.now1,
        msg: mensaje.value
      }
    ];
    formulario.reset();
  }

  commentTrackerFunction(index: number, comment: any) {
    return comment.name;
  }
  
  constructor() { }

  ngOnInit() {}
}
