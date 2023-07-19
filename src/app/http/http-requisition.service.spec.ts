import { TestBed } from '@angular/core/testing';

import { HttpRequisitionService } from './http-requisition.service';

describe('HttpRequisitionService', () => {
  let service: HttpRequisitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpRequisitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
