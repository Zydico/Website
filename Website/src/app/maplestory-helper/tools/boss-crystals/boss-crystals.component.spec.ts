import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BossCrystalsComponent } from './boss-crystals.component';

describe('BossCrystalsComponent', () => {
  let component: BossCrystalsComponent;
  let fixture: ComponentFixture<BossCrystalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BossCrystalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BossCrystalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
