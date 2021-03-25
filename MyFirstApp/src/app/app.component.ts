import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  titulos: string[];

  constructor() {
    this.titulos = ['Pulp Fiction', 'Start Wars', 'Constantine'];
  }

  onAlertaPulsada($event) {
    console.log($event);
  }
}
