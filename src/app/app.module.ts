import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StoryComponent } from './story/story.component';
import { StoryListComponent } from './story-list/story-list.component';
import { StoryWriterComponent } from './story-writer/story-writer.component';

import { StoryReaderService } from './story-reader.service';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StoryComponent,
    StoryListComponent,
    StoryWriterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    StoryReaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
