import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';


export interface ResponseObj {
  status: Boolean;
  data: any,
  error: String
}

@Injectable()
export class StoryReaderService {
  constructor(
    private http: HttpClient
  ) { }
  private BaseUrl = 'http://localhost/web/learning/s-app-server/s-app-server/src/index.php';
  sayHello(): Observable<ResponseObj> {
    return this.http.get<ResponseObj>(this.BaseUrl);
  }

}
