import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numsCronometro: number[];

  constructor() {
    this.numsCronometro = [2, 5, 8, 10];
  }

  terminaCrono($event) {
    console.log($event);
  }
}
