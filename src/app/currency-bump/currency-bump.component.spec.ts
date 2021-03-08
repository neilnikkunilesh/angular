import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyBumpComponent } from './currency-bump.component';

describe('CurrencyBumpComponent', () => {
  let component: CurrencyBumpComponent;
  let fixture: ComponentFixture<CurrencyBumpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyBumpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyBumpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
