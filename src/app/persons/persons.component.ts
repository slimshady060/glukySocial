import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/posts.service';

@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html',
  styleUrls: ['./persons.component.scss']
})
export class PersonsComponent implements OnInit {
  public arrayPersons: any;
  public loadingList = true;

  constructor(public dummyService: PostService) { }

  ngOnInit(): void {
    this.getPersons();
  }


  getPersons() {
    this.dummyService.getPersonsList().subscribe(response => {
    this.arrayPersons = response.data;
    }, error => console.log(error),
     () => this.loadingList = false );
  }
}
