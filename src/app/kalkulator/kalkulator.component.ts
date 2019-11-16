import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.less']
})
export class KalkulatorComponent implements OnInit {
  wynik: string;
  liczbaA: string;
  liczbaB: string;
  kwadrat = 0;
  liczba1n: string;
  wynik1n: string;


  constructor() {
  }

  ngOnInit() {
  }

  computeSum() {
    const a = parseInt(this.liczbaA);
    const b = parseInt(this.liczbaB);
    this.wynik = a + b;
    this.kwadrat = this.nearestSquare(this.wynik);
  }


  nearestSquare(value: number): number {
    //; returns: najmniejsza l.calkowita x=y+y, gdzie y to l.calklowita
    for (let y = 0; y <= 100; y++) {
      let x = y * y;
      if (x >= value) return x;
    }

  }

  computeSum1n(liczba1n: number) {
    //todo: write me!
    return 0;

  }
}
