import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Album de fotos';
  photo1 = 'https://cdn.pixabay.com/photo/2019/06/23/13/08/unlucky-dragonfly-4293710_960_720.jpg';
  photo2 = 'https://cdn.pixabay.com/photo/2019/06/22/19/01/dog-4292254_960_720.jpg';
  photo3 = 'https://cdn.pixabay.com/photo/2019/05/18/00/22/panda-4211083_960_720.jpg';
}
