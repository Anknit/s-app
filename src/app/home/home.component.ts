import { Component, OnInit } from '@angular/core';

import { Story } from '../story';
import { StoryReaderService } from '../story-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  stories: Story[];
  constructor(
    private storyReaderService: StoryReaderService
  ) { }

  ngOnInit() {
    this.getStories();
  }

  getStories(): void {
    this.storyReaderService.getStories()
      .subscribe(res => this.stories = res.data.stories);
  }

}
