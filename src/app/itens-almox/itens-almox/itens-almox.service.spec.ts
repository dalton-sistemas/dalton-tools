import { TestBed } from '@angular/core/testing';

import { ItensAlmoxService } from './itens-almox.service';

describe('ItensAlmoxService', () => {
  let service: ItensAlmoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItensAlmoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
