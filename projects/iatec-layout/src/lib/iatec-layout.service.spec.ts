import { TestBed } from '@angular/core/testing';

import { IatecLayoutService } from './iatec-layout.service';

describe('IatecLayoutService', () => {
  let service: IatecLayoutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IatecLayoutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
