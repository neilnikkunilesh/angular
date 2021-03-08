import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PricingAdminComponent } from './pricing-admin.component';

describe('PricingAdminComponent', () => {
  let component: PricingAdminComponent;
  let fixture: ComponentFixture<PricingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PricingAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PricingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
