import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  titulo: string;
  constructor() {
    this.titulo = 'MyBlog';
  }

  ngOnInit() {

  }

}
