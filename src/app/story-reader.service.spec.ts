import { TestBed, inject } from '@angular/core/testing';

import { StoryReaderService } from './story-reader.service';

describe('StoryReaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryReaderService]
    });
  });

  it('should be created', inject([StoryReaderService], (service: StoryReaderService) => {
    expect(service).toBeTruthy();
  }));
});
