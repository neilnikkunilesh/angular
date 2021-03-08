import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleUploadComponent } from './rule-upload.component';

describe('RuleUploadComponent', () => {
  let component: RuleUploadComponent;
  let fixture: ComponentFixture<RuleUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RuleUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
