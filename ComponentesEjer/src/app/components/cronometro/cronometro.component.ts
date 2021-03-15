import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-cronometro',
  templateUrl: './cronometro.component.html',
  styleUrls: ['./cronometro.component.css']
})
export class CronometroComponent implements OnInit {

  number: number;

  constructor() {
    this.number = 10;
   }

  ngOnInit(): void {
  }

  startCronometro(){
    let interval = setInterval(() => {
      this.number--;
    if(this.number === 0){
      clearInterval(interval);
    }
  }, 1000);
  }
}
