import { TestBed } from '@angular/core/testing';

import { LogChargeService } from './log-charge.service';

describe('LogChargeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LogChargeService = TestBed.get(LogChargeService);
    expect(service).toBeTruthy();
  });
});
