import { TestBed } from '@angular/core/testing';

import { BuscadorTextoService } from './buscador-texto.service';

describe('BuscadorTextoService', () => {
  let service: BuscadorTextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadorTextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
