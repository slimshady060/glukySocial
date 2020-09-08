import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-news',
  templateUrl: './card-news.component.html',
  styleUrls: ['./card-news.component.scss']
})
export class CardNewsComponent implements OnInit {
  @Input() newsTitle: string;
  @Input() newsText: string;
  @Input() newsImageUrl: string;
  @Input() newsLink: string;

  constructor() { }

  ngOnInit(): void {
  }

}
