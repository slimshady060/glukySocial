import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';
import { NewsServiceService } from '../services/news-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public arrayPostsElements;
  public arrayNews;
  public loading = true;
  public loadingNews = true;

  postForm = new FormGroup({
    comment: new FormControl(
      '',  [Validators.required, Validators.minLength(10)]
    ),
    url: new FormControl('')
  });

  constructor(private dummyService: PostService, private newsService: NewsServiceService) { }

  ngOnInit(): void {
    this.getPost();
    this.getNews();
  }

  getPost(){
    this.dummyService.getPost().subscribe(response => {
      this.arrayPostsElements = response.data;
    }, err => console.log(err),
       () => this.loading = false );
  }

  getNews() {
   this.newsService.getNews().subscribe(response => {
     this.arrayNews = response.articles;
   }, err => console.log(err),
   () => this.loadingNews = false);
  }

  onSubmit() {
    const post = this.postForm.value;
    this.arrayPostsElements.unshift(
        {
          owner: {
              id: '1pRsh5nXDIH3pjEOZ17A',
              lastName: 'Demo',
              title: 'miss',
              firstName: 'User',
              email: 'margarita.vicente@example.com',
              picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBAUzXgWUbw_nwfMvHC-bs_tY2UvxHqLu8mg&usqp=CAU'
          },
          id: '5zNq7oqJ0RWtPcY5ZiWR',
          image: post.url || 'https://www.kotor.com/images/no-image.png',
          publishDate: new Date(),
          text: post.comment,
          likes: 0
        }
    );
    $('#modal').modal('hide');
  }


}
