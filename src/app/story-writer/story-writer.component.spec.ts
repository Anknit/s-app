import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryWriterComponent } from './story-writer.component';

describe('StoryWriterComponent', () => {
  let component: StoryWriterComponent;
  let fixture: ComponentFixture<StoryWriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StoryWriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryWriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
