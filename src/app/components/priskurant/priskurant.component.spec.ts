import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriskurantComponent } from './priskurant.component';

describe('PriskurantComponent', () => {
  let component: PriskurantComponent;
  let fixture: ComponentFixture<PriskurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriskurantComponent]
    });
    fixture = TestBed.createComponent(PriskurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
