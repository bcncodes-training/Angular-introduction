import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-latest-champions',
  templateUrl: './latest-champions.component.html',
  styleUrls: ['./latest-champions.component.scss']
})
export class LatestChampionsComponent implements OnInit {
  titulo = 'teams';

  latestChampions: Array<Object> = [{
    year: '2015-16',
    team: 'Cleveland Cavaliers',
    url: 'https://en.wikipedia.org/wiki/2015%E2%80%9316_Cleveland_Cavaliers_season',
    Image: '../assets/cavaliers_logo.jpg',
    bestPlayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
  },
  {
    year: '2014-15',
    team: 'Golden State Warriors',
    url: 'https://en.wikipedia.org/wiki/2014%E2%80%9315_Golden_State_Warriors_season',
    Image: '../assets/golden-warriors_logo.png',
    bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
  },
  {
    year: '2013-14',
    team: 'San antonio Spurs',
    url: 'https://en.wikipedia.org/wiki/2013%E2%80%9314_San_Antonio_Spurs_season',
    Image: '../assets/san-antonio_logo.png',
    bestPlayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginobili', 'Kawhi Leonard', 'Tiago Splitter']
  }];

  constructor() { }

  ngOnInit() {
  }

}
