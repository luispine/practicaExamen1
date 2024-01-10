import { Component } from '@angular/core';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.css']
})
export class AreaCalculatorComponent {
  base: number = 0;
  altura: number = 0;

  calcularArea(): number {
    return(this.base * this.altura)/2;
  }
}
