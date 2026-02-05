import { TestBed } from '@angular/core/testing';

import { Builder } from './builder';

describe('Builder', () => {
  let service: Builder;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Builder);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
