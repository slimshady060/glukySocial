import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-person',
  templateUrl: './card-person.component.html',
  styleUrls: ['./card-person.component.scss']
})
export class CardPersonComponent implements OnInit {
  public pictureOwner = 'https://randomuser.me/api/portraits/men/81.jpg';
  @Input() imageUrl: string;
  @Input() fullName: string;
  @Input() email: string;

  constructor() { }

  ngOnInit(): void {
  }

}
