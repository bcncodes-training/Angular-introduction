import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-formulario-comentarios',
  templateUrl: './formulario-comentarios.component.html',
  styleUrls: ['../app.component.css']
})
export class FormularioComentariosComponent /*implements OnInit*/ {

  estado = false;

  mostrarAviso() {
    alert('Hola');
  }


/*
  constructor() {


   }

  ngOnInit() {

  }
*/
}

