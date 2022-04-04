import { TestBed } from '@angular/core/testing';

import { SortingAnimeService } from './sorting-anime.service';

describe('SortingAnimeService', () => {
  let service: SortingAnimeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SortingAnimeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
