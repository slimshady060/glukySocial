import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {

  constructor(private http: HttpClient) { }

  getNews(): Observable<any> {
    return this.http.get(`${environment.newsApiBaseUrl}/top-headlines?sources=bbc-news`);
  }
}
