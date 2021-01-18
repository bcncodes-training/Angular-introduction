import { Component } from '@angular/core';

@Component({
<<<<<<< HEAD
  selector: 'p-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title  = 'National Parks';
  url1   = 'https://theclick36.com';
  photo1 = 'https://images.unsplash.com/photo-1513213811339-9ab4601572d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80';
  photo2 = 'https://images.unsplash.com/photo-1495242024181-f22bd6b31f3f';
  photo3 = 'https://images.unsplash.com/photo-1554990772-0bea55d510d5';
  figImg1 = 'Torres del Paine, Patagonia';
  figImg2 = 'Colorado Canyon River';
  figImg3 = 'Serengueti Masai Mara';
=======
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
>>>>>>> 972f7d53894938cec951e7011cff9144f16ae353
}
