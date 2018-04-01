import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Story } from '../story';

import { StoryReaderService } from '../story-reader.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {
  story :Story;
  constructor(
    private route: ActivatedRoute,
    private storyReaderService: StoryReaderService,
    private location: Location
  ) { }

  ngOnInit() :void {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.storyReaderService.getStory(id)
      .subscribe(res => this.story = res.data.story);
  }

}
