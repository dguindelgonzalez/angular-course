import { Component } from '@angular/core';
import { Pelicula } from './models/pelicula';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  numsCronometro: number[];
  peliculas: Pelicula[];

  constructor() {
    this.numsCronometro = [2, 5, 8, 10];
    this.peliculas = [];
  }

  terminaCrono($event) {
    console.log($event);
  }

  agregarPelicula($event) {
    this.peliculas.push($event);
  }
}
