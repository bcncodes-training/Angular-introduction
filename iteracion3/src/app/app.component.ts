import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  fecha: string = "";
  constructor(){
    moment.locale('es');
    this.fecha = moment().format('LLL');
  }
  ngOnInit(): void {

    let date: string = moment().format("D/ MM/ YY");
    let hour: string = moment().format("hh:m:ss");
   console.log(`${date} ${hour}`);
   console.log(`${this.fecha}`);
  }

}
