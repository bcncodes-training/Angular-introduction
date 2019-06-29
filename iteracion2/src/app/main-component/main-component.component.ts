import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})
export class MainComponentComponent implements OnInit {
  title = 'Loose in the Sky';
  picture = 'New York in the Future...';
  pictureHref = '../assets/images/maxresdefault.jpg';
  figCaption = 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

  constructor() { }

  ngOnInit() {
  }

}
