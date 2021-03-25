import { Component, OnInit, Input } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css'],
})
export class ListaComponent implements OnInit {
  @Input() peliculasInput: Pelicula[];

  constructor() {
    this.peliculasInput = [];
  }

  ngOnInit(): void {}
}
