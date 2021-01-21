import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string = 'NBA Champions';
  subtitle: string = 'Iterations over array of objects';
  bgUrl: string = '../../assets/bgNba.png';
  nbaUrl: string = 'https://es/nba.com'
  constructor() { }

  ngOnInit(): void {
  }

}
