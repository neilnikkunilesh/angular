import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceSimComponent } from './price-sim.component';

describe('PriceSimComponent', () => {
  let component: PriceSimComponent;
  let fixture: ComponentFixture<PriceSimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriceSimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceSimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
