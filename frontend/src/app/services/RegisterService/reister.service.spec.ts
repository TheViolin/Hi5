import { TestBed } from '@angular/core/testing';

import { ReisterService } from './reister.service';

describe('ReisterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReisterService = TestBed.get(ReisterService);
    expect(service).toBeTruthy();
  });
});
