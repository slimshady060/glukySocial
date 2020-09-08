import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { NewsServiceService } from '../services/news-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public arrayPostsElements;
  public arrayNews;
  constructor(private dummyService: PostService, private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.getPost();
    this.getNews();
  }

  getPost(){
    this.dummyService.getPost().subscribe(response => {
      this.arrayPostsElements = response.data;
    })
  }

  getNews() {
   this.newsService.getNews().subscribe(response => {
     this.arrayNews = response.articles;
   });
  }

}
