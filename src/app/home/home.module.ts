import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MatIconModule } from '@angular/material/icon';
import { CardComponent } from '../shared/card/card.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { PostService } from '../services/posts.service';
import { ApiDummyInterceptor } from '../interceptors/api-dummy.interceptor';
import { MatCardModule } from '@angular/material/card';
import { CardNewsComponent } from '../shared/card-news/card-news.component';
import { NewsServiceService } from '../services/news-service.service';


@NgModule({
  declarations: [
    HomeComponent,
    CardComponent,
    CardNewsComponent
  ],
  providers: [
    PostService,
    NewsServiceService,
    { provide: HTTP_INTERCEPTORS, useClass: ApiDummyInterceptor, multi: true }
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule
  ]
})
export class HomeModule { }
