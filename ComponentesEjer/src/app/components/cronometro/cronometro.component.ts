import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css'],
})
export class CronometroComponent implements OnInit {
  @Input() number: number;
  @Output() terminaCronoMensaje: EventEmitter<string>;

  cronoNumber: number;

  constructor() {
    this.number = 0;
    this.terminaCronoMensaje = new EventEmitter();
  }

  ngOnInit(): void {
    this.cronoNumber = this.number;
  }

  startCronometro() {
    let interval = setInterval(() => {
      this.cronoNumber--;
      if (this.cronoNumber < 0) {
        this.cronoNumber = this.number;
        this.terminaCronoMensaje.emit(
          `Ha finalizado el cornometro con valor --> ${this.number}`
        );
        clearInterval(interval);
      }
    }, 1000);
  }
}
