import { TestBed } from '@angular/core/testing';

import { LoadingSpinerService } from './loading-spiner.service';

describe('LoadingSpinerService', () => {
  let service: LoadingSpinerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadingSpinerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
