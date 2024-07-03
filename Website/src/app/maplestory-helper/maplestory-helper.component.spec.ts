import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaplestoryHelperComponent } from './maplestory-helper.component';

describe('MaplestoryHelperComponent', () => {
  let component: MaplestoryHelperComponent;
  let fixture: ComponentFixture<MaplestoryHelperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaplestoryHelperComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaplestoryHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
