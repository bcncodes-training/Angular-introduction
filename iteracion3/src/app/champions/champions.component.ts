import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-champions',
  templateUrl: './champions.component.html',
  styleUrls: ['./champions.component.scss']
})
export class ChampionsComponent implements OnInit {


Champ: Array <object> = [
    {
      anno: '2017-18',
      name: 'Pippo Pippa',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy_6UlrjLfnVuWtgDrxONkYphIQGxLf5HmScAJp-X-2zoAstZ',
      players : ['John Stone', 'Ponnappa Priya', 'Mia Wong', 'Peter Stanbridge', 'Natalie Lee-Walsh'],
    },

    {
      anno: '2016-17',
      name: 'Cockney Adveture',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy_6UlrjLfnVuWtgDrxONkYphIQGxLf5HmScAJp-X-2zoAstZ',
      players: ['Salome Simoes', 'Trevor Virtue', 'Jane Meldrum', 'Hayman Andrews', 'Jane Meldrum'],
    },
    {
      anno: '2015-16',
      name: 'ALBONYG',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcy_6UlrjLfnVuWtgDrxONkYphIQGxLf5HmScAJp-X-2zoAstZ',
      players: ['Andrew Kazantzis', 'Daly Harry', 'Jane Meldrum', 'Maureen M. Smith', 'Ruveni Ellawala'],
    }];


constructor(){

}

ngOnInit(){

}

}
