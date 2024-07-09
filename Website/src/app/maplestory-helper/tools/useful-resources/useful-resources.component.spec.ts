import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsefulResourcesComponent } from './useful-resources.component';

describe('UsefulResourcesComponent', () => {
  let component: UsefulResourcesComponent;
  let fixture: ComponentFixture<UsefulResourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsefulResourcesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsefulResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
