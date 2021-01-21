import { Component, OnInit } from '@angular/core';
import { latestChampions } from '../shared/nba.data';
import * as moment from 'moment';

@Component({
  selector: 'pr-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {
  // read the arr
  dataArr: any [] = [];
  year: string = '';
  team: string = '';
  urlImg: string = '';
  bestPlayer: any [] = [];
  // time
  fecha: string = '';

  constructor() {
    this.dataArr = latestChampions;
    moment.locale('es');
    this.fecha = moment().format('LLL');
   }

  ngOnInit(): void {

  }

}
