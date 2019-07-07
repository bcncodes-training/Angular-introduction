import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.scss']
})

export class MainComponentComponent implements OnInit {
  title = 'Version 8 of Angular — Smaller bundles, CLI APIs, and alignment with the ecosystem';
  image = 'https://estaticos.miarevista.es/media/cache/760x570_thumb/uploads/images/article/57e4f4dfc9ef941705c7a5b4/int-lunallena.jpg';
  prf1 = 'The 8.0.0 release of Angular is here! This is a major release spanning the entire platform, including the framework, Angular Material, and the CLI with synchronized major versions. This release improves application startup time on modern browsers, provides new APIs for tapping into the CLI, and aligns Angular to the ecosystem and more web standards.';

  constructor() { }

  ngOnInit() {
  }

}
