import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sumar',
  templateUrl: './sumar.component.html',
  styleUrls: ['./sumar.component.css']
})
export class SumarComponent implements OnInit {

  sumador1: number;
  sumador2: number;
  total: number;

  constructor() {
    this.sumador1 = 56;
    this.sumador2 = 44;
    this.total = 0;
   }

  ngOnInit(): void {
  }

  suma(){
    this.total = this.sumador1 + this.sumador2;
  }
}
