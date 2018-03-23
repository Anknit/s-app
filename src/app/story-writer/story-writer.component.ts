import { Component, OnInit } from '@angular/core';
import { StoryWriterService } from '../story-writer.service';

@Component({
  selector: 'app-story-writer',
  templateUrl: './story-writer.component.html',
  styleUrls: ['./story-writer.component.css']
})

export class StoryWriterComponent implements OnInit {

  constructor(
    private storyWriterService: StoryWriterService
  ) { }

  ngOnInit() {
  }

  error: String;
  story: Object = {
    title: ''
  };

  saveTitle(title: String): void{
    this.storyWriterService.saveTitle(title)
      .subscribe(res => {
        if(!res.status) {
          this.error = res.error;
        }
      })
  }


}
