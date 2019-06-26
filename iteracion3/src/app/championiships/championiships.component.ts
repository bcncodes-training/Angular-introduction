import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championiships',
  templateUrl: './championiships.component.html',
  styleUrls: ['./championiships.component.scss']
})
export class ChampionishipsComponent implements OnInit {


  teams = [];

  constructor() {


    this.teams.push({
      years: "2015-16",
      name: "Cleveland Cavaliers",
      imageURL: "/assets/cleveland-cavaliers.png",
      players: [
        "Lebron James",
        "Kyrie Irving",
        "Kevin Love",
        "J. R. Smith",
        "Anderson Varajao"
      ]
    });

    this.teams.push({
      years: "2014-15",
      name: "Golden State Warriors",
      imageURL: "/assets/golden-state-warriors.png",
      players: [
        "Stephen Curry",
        "Klay Thompson",
        "Draymong Green",
        "Andrew Bogut",
        "Gestus Ezeli"
      ]
    });

    this.teams.push({
      years: "2013-14",
      name: "San Antonio Spurs",
      imageURL: "/assets/san-antonio-spurs.png",
      players: [
        "Tim Duncan",
        "Tony Parker",
        "Manu Ginóbili",
        "Kawhi Leonard",
        "Tiago Splitter"
      ]
    });

   }

  ngOnInit() {

  }

}
