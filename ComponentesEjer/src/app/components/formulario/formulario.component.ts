import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent implements OnInit {
  peliculaForm: Pelicula;
  @Output() peliculaEmitter: EventEmitter<Pelicula>;

  constructor() {
    this.peliculaForm = new Pelicula();
    this.peliculaEmitter = new EventEmitter();
  }

  ngOnInit(): void {}

  enviarPelicula() {
    if (!this.peliculaForm.titulo || !this.peliculaForm.descripcion) {
      console.log('Por favor rellena titulo y descripción');
    } else {
      this.peliculaEmitter.emit(this.peliculaForm);
      this.peliculaForm = new Pelicula();
    }
  }
}
