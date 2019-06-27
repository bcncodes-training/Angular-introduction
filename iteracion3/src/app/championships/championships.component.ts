import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-championships',
  templateUrl: './championships.component.html',
  styleUrls: ['./championships.component.scss']
})
export class ChampionshipsComponent implements OnInit {
  championships = [
    {
      season: '2019-18',
      champion: 'Toronto Raptors',
      logo: 'https://d2p3bygnnzw9w3.cloudfront.net/req/201906181/tlogo/bbr/TOR-2019.png',
      url: 'https://www.nba.com/raptors/',
      bestPlayers: [{ name: 'Kawhi Leonard' }, { name: 'Pascal Siakam' }, { name: 'Kyle Lowry' }, { name: 'Fred VanVleet' }, { name: 'Marc Gasol' }]
    },
    {
      season: '2018-17',
      champion: 'Golden State Warriors',
      logo: 'https://d2p3bygnnzw9w3.cloudfront.net/req/201906112/tlogo/bbr/GSW-2016.png',
      url: 'https://www.nba.com/warriors/',
      bestPlayers: [{ name: 'Kevin Durant' }, { name: 'Stephen Curry' }, { name: 'Klay Thompson' }, { name: 'Draymond Green' }, { name: 'JaVale McGee' }]
    },
    {
      season: '2016-15',
      champion: 'Cleveland Cavaliers',
      logo: 'https://d2p3bygnnzw9w3.cloudfront.net/req/201906112/tlogo/bbr/CLE.png',
      url: 'www.nba.com/cavaliers/',
      bestPlayers: [{ name: 'Matthew Dellavedova' }, { name: 'Channing Frye' }, { name: 'Kyrie Irving' }, { name: 'LeBron James' }, { name: 'Richard Jefferson' }]
    }



  ];
  constructor() { }

  ngOnInit() {
  }

}
