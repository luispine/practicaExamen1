import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreaCalculatorComponent } from './area-calculator.component';

describe('AreaCalculatorComponent', () => {
  let component: AreaCalculatorComponent;
  let fixture: ComponentFixture<AreaCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AreaCalculatorComponent]
    });
    fixture = TestBed.createComponent(AreaCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the calculate coorrectly', () => {
    component.base = 4;
    component.altura = 6;

    const area = component.calcularArea();
    expect(area).toEqual(12);

  });

  it('should return the correct calculate', () => {
    component.base = 5;
    component.altura = 8;

    const area = component.calcularArea();
    expect(area).toEqual(20);

  });

  it('should return the correctly answer', () => {
    component.base = 0;
    component.altura = 0;

    const area = component.calcularArea();
    expect(area).toEqual(0);

  });

});
