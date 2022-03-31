import { TestBed } from '@angular/core/testing';

import { SortedListService } from './sorted-list.service';

describe('SortedListService', () => {
  let service: SortedListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortedListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
