import { ComponentFixture, TestBed } from '@angular/core/testing';

import RegnskabsummerComponent from './regnskabsummer.component';

describe('RegnskabsummerComponent', () => {
  let component: RegnskabsummerComponent;
  let fixture: ComponentFixture<RegnskabsummerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RegnskabsummerComponent]
    });
    fixture = TestBed.createComponent(RegnskabsummerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
