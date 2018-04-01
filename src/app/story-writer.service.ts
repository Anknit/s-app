import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Story } from './story';

export interface ResponseObj {
  status: Boolean;
  data: any,
  error: String
}

@Injectable()
export class StoryWriterService {

  constructor(
    private http: HttpClient
  ) { }
  private BaseUrl = 'http://localhost/web/learning/s-app-server/s-app-server/src/api/v1/story';

  saveTitle(title: String): Observable<ResponseObj> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<ResponseObj>(this.BaseUrl + '/title', {title:title}, httpOptions);
  }

  createStory(story: Story):  Observable<ResponseObj> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<ResponseObj>(this.BaseUrl + '/create', {story:story}, httpOptions);
  }

}
