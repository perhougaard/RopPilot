import { TestBed } from '@angular/core/testing';

import { PriskurantService } from './priskurant.service';

describe('PriskurantService', () => {
  let service: PriskurantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriskurantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
