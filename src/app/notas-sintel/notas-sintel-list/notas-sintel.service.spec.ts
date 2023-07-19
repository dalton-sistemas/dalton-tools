import { TestBed } from '@angular/core/testing';

import { NotasSintelService } from './notas-sintel.service';

describe('NotasSintelService', () => {
  let service: NotasSintelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotasSintelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
