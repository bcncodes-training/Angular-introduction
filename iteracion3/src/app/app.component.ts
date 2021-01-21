import { Component, OnInit } from '@angular/core';
import { Moment } from "moment";
const moment = require('moment');

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    let date = moment().format("D/ MM/ YY");
    let hour = moment().format("hh:m:ss");
   console.log(`${date} ${hour}`);
  }
  title = 'iteracion3';
}
