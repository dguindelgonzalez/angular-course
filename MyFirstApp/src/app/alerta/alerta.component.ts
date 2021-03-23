import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-alerta',
  templateUrl: './alerta.component.html',
  styleUrls: ['./alerta.component.css'],
})
export class AlertaComponent implements OnInit {
  @Input('texto') mensaje: string;
  @Input() subTitulo: string;

  constructor() {
    this.mensaje = 'Mensaje alerta por defecto';
    this.subTitulo = 'Sub Titulo por defecto';

    console.log(this.mensaje);
  }

  ngOnInit(): void {
    console.log(this.mensaje);
  }
}
