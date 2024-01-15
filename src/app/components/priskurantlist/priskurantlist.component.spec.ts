import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriskurantlistComponent } from './priskurantlist.component';

describe('PriskurantlistComponent', () => {
  let component: PriskurantlistComponent;
  let fixture: ComponentFixture<PriskurantlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PriskurantlistComponent]
    });
    fixture = TestBed.createComponent(PriskurantlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
