import { TestBed } from '@angular/core/testing';

import { AnimeDescriptionService } from './anime-description.service';

describe('AnimeDescriptionService', () => {
  let service: AnimeDescriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnimeDescriptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
