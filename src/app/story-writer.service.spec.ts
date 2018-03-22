import { TestBed, inject } from '@angular/core/testing';

import { StoryWriterService } from './story-writer.service';

describe('StoryWriterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryWriterService]
    });
  });

  it('should be created', inject([StoryWriterService], (service: StoryWriterService) => {
    expect(service).toBeTruthy();
  }));
});
