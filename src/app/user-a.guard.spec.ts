import { TestBed } from '@angular/core/testing';

import { UserAGuard } from './user-a.guard';

describe('UserAGuard', () => {
  let guard: UserAGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserAGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
