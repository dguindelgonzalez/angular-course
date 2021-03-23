import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sumadores: number[];

  constructor() {
    this.sumadores = [23, 46, 59, 25];
  }
}
