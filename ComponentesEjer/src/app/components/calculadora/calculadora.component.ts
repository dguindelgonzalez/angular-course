import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css'],
})
export class CalculadoraComponent implements OnInit {
  input: string;
  resultFlag: boolean;

  constructor() {
    this.input = '';
    this.resultFlag = false;
  }

  ngOnInit(): void {}

  onClick($event) {
    if (this.resultFlag) {
      this.resultFlag = false;
      this.input = '';
    }

    this.input += $event.target.innerText;
  }

  onEquals() {
    this.input = eval(this.input);
    this.resultFlag = true;
  }
}
