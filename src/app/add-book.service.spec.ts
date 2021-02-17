import { TestBed } from '@angular/core/testing';

import { AddBookService } from './add-book.service';

describe('AddBookService', () => {
  let service: AddBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
