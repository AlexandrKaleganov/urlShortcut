import { TestBed } from '@angular/core/testing';

import { HashAuthorityService } from './hash-authority.service';

describe('HashAuthorityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HashAuthorityService = TestBed.get(HashAuthorityService);
    expect(service).toBeTruthy();
  });
});
