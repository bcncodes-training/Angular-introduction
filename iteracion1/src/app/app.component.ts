import { Component } from '@angular/core';

@Component({
  selector: 'pr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  title2: string;
  constructor() {
    this.title = 'Iteracion 1';
    this.title2 = 'Galería';
  }
}
