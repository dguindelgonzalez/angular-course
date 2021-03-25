import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css'],
})
export class CronometroComponent implements OnInit {
  @Input() inicio: number;
  @Output() terminaCronoMensaje: EventEmitter<string>;

  cronoNumber: number;

  constructor() {
    this.terminaCronoMensaje = new EventEmitter();
  }

  ngOnInit(): void {
    this.cronoNumber = this.inicio ? this.inicio : 10;
  }

  startCronometro() {
    let interval = setInterval(() => {
      this.cronoNumber--;
      if (this.cronoNumber < 0) {
        this.cronoNumber = this.inicio;
        this.terminaCronoMensaje.emit(
          `Ha finalizado el cornometro con valor --> ${this.inicio}`
        );
        clearInterval(interval);
      }
    }, 1000);
  }
}
