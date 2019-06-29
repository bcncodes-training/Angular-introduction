import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iteracion3';
  ganadores = [
    {
      ano: '2016-17',
      name: 'Golden State Warriors',
      img: './assets/images/golden-state-warriors-kepsar.png',
      bPlayers: ['LeBron James', 'Kevin Durant', 'Kawhi Leonard', 'Stephen Curry']
    },
    {
      ano: '2017-18',
      name: 'Golden State Warriors',
      img: './assets/images/golden-state-warriors-kepsar.png',
      bPlayers: ['LeBron James', 'Kevin Durant', 'Stephen Curry', 'James Harden']
    },
    {
      ano: '2018-19',
      name: 'Toronto Raptors',
      img: './assets/images/toronto-raptors.png',
      bPlayers: ['Giannis Antetokounmpo', 'Kawhi Leonard', 'Joel Embiid', 'Kyrie Irving']
    }
  ]
}
