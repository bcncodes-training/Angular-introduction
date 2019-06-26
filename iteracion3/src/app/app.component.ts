import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  equipos = [
    {
      Equipo: 'Equipo1',
      Año: '2015',
      Logo: 'logo',
      BestPlayers: ['uno', 'dos', 'tres']
    },
    {
      Equipo: 'Equipo2',
      Año: '2016',
      Logo: 'logo',
      BestPlayers: ['uno', 'dos', 'tres']
    },
    {
      Equipo: 'Equipo3',
      Año: '2017',
      Logo: 'logo',
      BestPlayers: ['uno', 'dos', 'tres']
    }
  ]
}
