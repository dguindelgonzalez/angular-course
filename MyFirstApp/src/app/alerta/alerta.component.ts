import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css'],
})
export class AlertaComponent implements OnInit {
  @Input('texto') mensaje: string;
  @Input() subTitulo: string;

  @Output() alertaPulsada: EventEmitter<string>;

  constructor() {
    this.mensaje = 'Mensaje alerta por defecto';
    this.subTitulo = 'Sub Titulo por defecto';

    this.alertaPulsada = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.mensaje);
  }
  onClick() {
    this.alertaPulsada.emit('La alerta ha sido pulsada!');
  }
}
