import { TestBed } from '@angular/core/testing';

import { DicionarioTotvsService } from './dicionario-totvs.service';

describe('DicionarioTotvsService', () => {
  let service: DicionarioTotvsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DicionarioTotvsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
