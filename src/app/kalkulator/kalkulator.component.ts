import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-kalkulator',
  templateUrl: './kalkulator.component.html',
  styleUrls: ['./kalkulator.component.less']
})
export class KalkulatorComponent implements OnInit {
  wynik = 12;
  liczbaA: string;
  liczbaB: string;
  kwadrat = 0;

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

  /**
   *
   * @param value Wartość parametru dla którego liczymy kwadraty
   * @returns Najmnijesza liczba całkowita x = y * y >= value, gdzie y to l. całkowita
   */
  nearestSquare(value: number): number {
    for (let y = 0; y <= 100; y++) {
      let x = y * y;
      if (x >= value) return x;
    }

    // Działanie instrukcji warunkowych...
    // if (value < 100) {
    //   //kod wykonany jeśli wartość "value" < 100
    //   return 50;
    // } else {
    //   //kod wykonany jeśli wartość "value" >= 100
    //   return 200;
    // }
  }
}
