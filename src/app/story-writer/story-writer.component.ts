import { Component, OnInit } from '@angular/core';

import { Story } from '../story';
import { StoryWriterService } from '../story-writer.service';

@Component({
  selector: 'app-story-writer',
  templateUrl: './story-writer.component.html',
  styleUrls: ['./story-writer.component.css']
})

export class StoryWriterComponent implements OnInit {
  story:Story = new Story();
  error: String;

  constructor(
    private storyWriterService: StoryWriterService
  ) { }

  ngOnInit() {
  }

  saveTitle(title: String): void{
    this.storyWriterService.saveTitle(title)
      .subscribe(res => {
        if(!res.status) {
          this.error = res.error;
        }
      });
  }

  createStory(): void{
    this.storyWriterService.createStory(this.story)
      .subscribe(res => {
        if(!res.status) {
          this.error = res.error;
        } else {

        }
      });
  }


}
