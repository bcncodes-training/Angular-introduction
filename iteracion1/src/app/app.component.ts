import { Component } from '@angular/core';

@Component({
  selector: 'it1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Medieval Bestiary';
  pictures = [
    {
      path: "/assets/pelican.jpg",
      description: "Pelican"
    },
    {
      path: "/assets/bat.png",
      description: "Bat"
    },
    {
      path: "/assets/bidragon.jpg",
      description: "Bidragon"
    },
    {
      path: "/assets/lion.jpg",
      description: "Lion"
    },
    {
      path: "/assets/phoenix.jpg",
      description: "Phoenix"
    }
  ];

}
