import { TestBed } from '@angular/core/testing';

import { UserBGuard } from './user-b.guard';

describe('UserBGuard', () => {
  let guard: UserBGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UserBGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
