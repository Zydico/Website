import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IedCalculatorComponent } from './ied-calculator.component';

describe('IedCalculatorComponent', () => {
  let component: IedCalculatorComponent;
  let fixture: ComponentFixture<IedCalculatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IedCalculatorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IedCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
