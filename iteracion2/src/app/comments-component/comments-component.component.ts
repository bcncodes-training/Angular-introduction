import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.scss']
})
export class CommentsComponentComponent implements OnInit {
  titulo = 'Comments:';

  comments: Array<Object> = [{
    id: 1,
    name: 'Katy',
    date: '25/04/2019 15:26',
    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum lacus ac felis hendrerit, sed molestie mi laoreet. Proin dictum lacus ac felis hendrerit, sed molestie mi laoreet.'
  },{
    id: 2,
    name: 'Salomon',
    date: '25/04/2019 17:26',
    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum lacus ac felis hendrerit, sed molestie mi laoreet.'
  },{
    id: 3,
    name: 'Bondary',
    date: '26/04/2019 16:26',
    comentario: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }];




  constructor() { }

  ngOnInit() {
  }

}


/*@Component({
  selector: 'app-little-tour',
  template: `
    <input #newHero
      (keyup.enter)="addHero(newHero.value)"
      (blur)="addHero(newHero.value); newHero.value='' ">

    <button (click)="addHero(newHero.value)">Add</button>

    <ul><li *ngFor="let hero of heroes">{{hero}}</li></ul>
  `
})
export class LittleTourComponent {
  heroes = ['Windstorm', 'Bombasto', 'Magneta', 'Tornado'];
  addHero(newHero: string) {
    if (newHero) {
      this.heroes.push(newHero);
    }
  }
}*/
