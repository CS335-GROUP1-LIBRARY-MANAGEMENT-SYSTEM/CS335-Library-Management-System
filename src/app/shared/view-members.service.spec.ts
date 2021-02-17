import { TestBed } from '@angular/core/testing';

import { ViewMembersService } from './view-members.service';

describe('ViewMembersService', () => {
  let service: ViewMembersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewMembersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
