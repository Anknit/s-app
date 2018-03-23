import { Component, OnInit } from '@angular/core';

import { StoryReaderService } from '../story-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  helloMessage: String;
  constructor(
    private storyReaderService: StoryReaderService
  ) { }

  ngOnInit() {
//    this.sayHello();
  }

  sayHello(): void {
    this.storyReaderService.sayHello()
      .subscribe(res => this.helloMessage = res.data);
  }

}
