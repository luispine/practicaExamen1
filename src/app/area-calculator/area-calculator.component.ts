import { Component } from '@angular/core';

@Component({
  selector: 'app-area-calculator',
  templateUrl: './area-calculator.component.html',
  styleUrls: ['./area-calculator.component.css']
})
export class AreaCalculatorComponent {
  base: number = 0;
  altura: number = 0;
  resultado: number = 0;
  
  calcularArea(): void {
    console.log('Base:', this.base);
    console.log('Altura:', this.altura);

    this.resultado = (this.base * this.altura) / 2;

    console.log('Resultado:', this.resultado);
  }

  calcularAreaTest(): number {
    
    return(this.base * this.altura)/2;
  }

}
