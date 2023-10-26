import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpstillingComponent } from './opstilling.component';

describe('OpstillingComponent', () => {
  let component: OpstillingComponent;
  let fixture: ComponentFixture<OpstillingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpstillingComponent]
    });
    fixture = TestBed.createComponent(OpstillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
