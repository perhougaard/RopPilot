import { TestBed } from '@angular/core/testing';

import { RegnskabService } from './regnskab.service';

describe('RegnskabService', () => {
  let service: RegnskabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegnskabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
