import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-buttons',
  templateUrl: './color-buttons.component.html',
  styleUrls: ['./color-buttons.component.scss']
})
export class ColorButtonsComponent implements OnInit {

  verdeDesactivado: boolean;
  azulDesactivado: boolean;
  rojoDesactivado: boolean;

  contenidoVerde: string;
  contenidoAzul: string;
  contenidoRojo: string;

  constructor() {
    this.verdeDesactivado = false;
    this.azulDesactivado = true;
    this.rojoDesactivado = true;

    this.contenidoVerde = 'Verde';
    this.contenidoAzul = 'Azul';
    this.contenidoRojo = 'Rojo';
  }

  pulsarVerde() {
    this.azulDesactivado = false;
    this.rojoDesactivado = false;
    this.verdeDesactivado = true;
  }

  pulsarAzul() {
    alert('Has pulsado el botón azul!!');
  }

  pulsarRojo() {
    this.verdeDesactivado = false;
    this.azulDesactivado = true;
    this.rojoDesactivado = true;
  }

  ngOnInit() {
  }

}
