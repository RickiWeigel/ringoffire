import { TestBed } from '@angular/core/testing';

import { RingoffireService } from './ringoffire.service';

describe('RingoffireService', () => {
  let service: RingoffireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RingoffireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
