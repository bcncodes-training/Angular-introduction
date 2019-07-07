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
    urlImg: '../assets/cavaliers_logo.jpg',
    bestPlayers: ['Lebron James', 'Kyrie Irving', 'Kevin Love', 'J.R. Smith', 'Anderson Varejao']
  },
  {
    year: '2014-15',
    team: 'Golden State Warriors',
    urlImg: '../assets/golden-warriors_logo.png',
    bestPlayers: ['Stephen Curry', 'Klay Thompson', 'Draymong Green', 'Andrew Bogut', 'Gestus Ezeli']
  },
  {
    year: '2013-14',
    team: 'San antonio Spurs',
    urlImg: '../assets/san-antonio_logo.png',
    bestPlayers: ['Tim Duncan', 'Tony Parker', 'Manu Ginóbili', 'Kawhi Leonard', 'Tiago Splitter']
  }];

  constructor() { }

  ngOnInit() {
  }

}
