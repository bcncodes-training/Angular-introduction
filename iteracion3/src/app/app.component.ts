import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'NBA Champions';

  nbachampions = [
    {
      team: 'Toronto Raptors',
      year: '2019',
      logo: 'https://cdn.freebiesupply.com/images/large/2x/toronto-raptors-logo-transparent.png',
      bestPlayers: ['Gasol, Marc', 'Boucher, Chris', 'Ibaka, Serge	', 'Anunoby, OG']
    },
    {
      team: 'Golden State Warriors',
      year: '2016',
      logo: 'https://upload.wikimedia.org/wikipedia/sco/0/01/Golden_State_Warriors_logo.svg',
      bestPlayers: ['Lebron James2', 'Kyrie Irving', 'Kevin Love', 'JR Smith']
    },
    {
      team: 'San Antonio Spurs',
      year: '2017',
      logo: 'https://images.vexels.com/media/users/3/132006/isolated/preview/cb8990f888a45561c9d33a73b8c2c801-san-antonio-spurs-logo-by-vexels.png',
      bestPlayers: ['Lebron James3', 'Kyrie Irving', 'Kevin Love', 'JR Smith']
    }
  ];

}
