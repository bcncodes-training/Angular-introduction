import { Component } from '@angular/core';

@Component({
  selector: 'pr-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center">
      <h1>
        Welcome to {{title}}!
      </h1>
      <img width="300" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <div class="container">
      <div class = "row header">
      <div class ="col-md-12">
        <h2>{{tittle2}}</h2>
      </div><!--titulo-->
      </div><!--header-->
      <div class="row container-fotos" id="foticos">
      <div class="col-md-4">
          <figcaption>
            <img src="../assets/foto-1.jpg" alt="Look at me." />
            <p>Look at me</p>
            </figcaption>
      </div><!--col-->
      <div class="col-md-4">
          <figcaption>
            <img src="../assets/foto-2.jpg" alt="Lighthouse" />
            <p>The Lighthouse</p>
            </figcaption>
      </div><!--col-->
      <div class="col-md-4">
          <figcaption>
            <img src="../assets/foto-3.jpg" alt="The coffee shop"/>
            <p>The coffee Shop</p>
            </figcaption>
      </div><!--col-->
    </div> <!--row container-->
   </div>
    <router-outlet></router-outlet>
    
  `,
  styles: []
})
export class AppComponent {
  title : string;
  tittle2 : string;
  constructor(){
    this.title = 'iteracion 1';
    this.tittle2 = 'Galeria';
  }
}
