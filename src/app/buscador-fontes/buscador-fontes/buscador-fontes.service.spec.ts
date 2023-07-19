import { TestBed } from '@angular/core/testing';

import { BuscadorFontesService } from './buscador-fontes.service';

describe('BuscadorFontesService', () => {
  let service: BuscadorFontesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadorFontesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
