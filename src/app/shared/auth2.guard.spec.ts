import { TestBed } from '@angular/core/testing';

import { Auth2Guard } from './auth2.guard';

describe('Auth2Guard', () => {
  let guard: Auth2Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(Auth2Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
