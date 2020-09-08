import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class ApiDummyInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const url = `${environment.baseDummyApi}`;
    const newsApiUrl = `${environment.newsApiBaseUrl}`;

    if (req.url.includes(url)) {
      const headerReq = req.clone({
       headers: new HttpHeaders().set('app-id', environment.apiKey)
      });
      return next.handle(headerReq);
    } else if (req.url.includes(newsApiUrl)) {
      const newsHeaderReq = req.clone({
        headers: new HttpHeaders().set('x-api-key', environment.newsApiKey)
       });
      return next.handle(newsHeaderReq);
    } else {
      return next.handle(req);
    }
  }
}
