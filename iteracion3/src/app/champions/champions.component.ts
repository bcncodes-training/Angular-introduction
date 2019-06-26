import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it03-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {
  cleveland = '../assets/cleveland.png';
  golden = '../assets/goldenstate.png';
  spurs = '../assets/spurs.jpg';

  arrayCampeonatos = [
    {
      year:'2015-2016',
      winner:'Cleveland Cavaliers',
      url:'https://en.wikipedia.org/wiki/Cleveland_Cavaliers',

     },

      {
       year:'2014-2015',
       winner:'Golden State Warriors',
       url:'https://en.wikipedia.org/wiki/Golden_State_Warriors'

       },

       {
         year:'2013-2014',
         winner:'San Antonio Spurs',
         url:'https://en.wikipedia.org/wiki/San_Antonio_Spurs',
         bestPlayers:{

         }
       }
       ];

       spursBest= [

        {
          player: 'Tim Duncan'
        },
        {
          player: 'Tony Parker'
        }
       ,
       {
        player: 'Manu Ginobili'
       }
        ,
       {
        player: 'Kahwi Leonard'
       },

      {
        player: 'Tiago Splitter'
      }

       ]


       goldenBest= [
        {
          player: 'Stephen Curry',
          },
          {
          player: 'Klay Thompson',
          },
          {
          player: 'Draymong Green',
          },
          {
          player: 'Andrew Bogut',
          },
          {
          player: 'Gestus Eseli',
          }
      ];

    clevelandBest =
      [
        {
          player: 'Lebron James',
          },
          {
          player: 'Kyrie Irving',
          },
          {
          player: 'kevin Love',
          },
          {
          player: 'JR Smith',
          },
          {
          player: 'Anderson Varejao',
          }
    ];



  constructor() { }

  ngOnInit() {
  }

}
