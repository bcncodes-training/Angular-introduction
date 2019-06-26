import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'iteracion3';
  champions = [
    {
      year: '2015-16',
      name : 'Clevaland Cavaliers',
      logo : 'https://upload.wikimedia.org/wikipedia/en/thumb/4/4b/Cleveland_Cavaliers_logo.svg/100px-Cleveland_Cavaliers_logo.svg.png',
      bestPLayers :
      [
        {player:'Lebron James'},
        {player:'Kyle Irving'},
        {player:'Lebron James'},
        {player:'Lebron James'},
        {player:'Lebron James'}

      ]

    },
    {
      year: '2014-15',
      name : 'Golden State Warriors',
      logo : 'https://cdnb.20m.es/sites/30/2018/07/gggqhhir6fj8zp30f33s7sfb4yw0.png',
      bestPLayers :
      [
        {player:'Stephen Curry'},
        {player:'Kyle Irving'},
        {player:'Lebron James'},
        {player:'Lebron James'},
        {player:'Lebron James'}

      ]

    },
    {
      year: '2013-14',
      name : 'San Antonio Spurs',
      logo : 'data:image/png;base64,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',
      bestPLayers :
      [
        {player:'Tim Duncan'},
        {player:'Kyle Irving'},
        {player:'Lebron James'},
        {player:'Lebron James'},
        {player:'Lebron James'}

      ]

    }
  ]
}
