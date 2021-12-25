import { TestBed } from '@angular/core/testing';

import { UserCGuard } from './user-c.guard';

describe('UserCGuard', () => {
  let guard: UserCGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserCGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
