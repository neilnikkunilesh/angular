import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemDefaultComponent } from './system-default.component';

describe('SystemDefaultComponent', () => {
  let component: SystemDefaultComponent;
  let fixture: ComponentFixture<SystemDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemDefaultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
