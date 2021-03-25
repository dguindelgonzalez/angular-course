import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulos: string[];

  campoTexto: string;

  constructor() {
    this.titulos = ['Pulp Fiction', 'Start Wars', 'Constantine'];
    this.campoTexto = 'Valor inicial';
  }

  onAlertaPulsada($event) {
    console.log($event);
  }

  onClick() {
    this.campoTexto = 'Valor desde el botón';
  }
}
