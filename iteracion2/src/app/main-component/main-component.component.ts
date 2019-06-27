import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'it02-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  title = 'Cyberpunk 2077 release date – all the latest details on the dystopian RPG';
  mainPic = '../assets/cyberpunkbg1.jpg';
  gameplay = '../assets/cpgameplay.jpg';
  p1="Anticipation for the Cyberpunk 2077 release date couldn’t be higher. CD Projekt Red had kept us waiting for years to find out, so when Keanu Reeves showed up at E3 2019 to reveal it, alongside the fact he’ll be playing Johnny Silverhand, we went somewhat into overdrive."
  p2="Alongside that, we got a good peep at more gameplay footage, which builds upon the E3 2018 demo that showed Cyberpunk 2077 is the answer to, perhaps, the biggest game development question of the decade: how do you follow up something like The Witcher 3? Polish RPG powerhouse CD Projekt Red is looking to replicate its successes with Eastern Europe’s beloved fantasy book series by turning its hand to the futuristic world of Cyberpunk 2077"
  p3="CD Projekt Red’s videogame is an adaptation of the Cyberpunk 2020 pen-and-paper game. It’s a first-person RPG set in a gritty, vast future metropolis known as Night City. Like The Witcher 3, it’s an adult story, touching on drugs, violence, and social politics. It’s almost certainly going to be the most talked about game when it finally releases next year. Here’s everything we know about Cyberpunk 2077.";





  constructor() { }


  ngOnInit() {
  }

}
