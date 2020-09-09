import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public fillColor = false;
  public favoriteType = 'favorite_border';
  @Input() urlImge: string;
  @Input() likes = 0;
  @Input() title: string;
  @Input() owner: string;
  @Input() datePublic: string;
  @Input() text: string;
  @Input() pictureOwner: string;

  constructor() { }

  ngOnInit(): void {
  }

  changeFillColor() {
    if (!this.fillColor) {
      this.fillColor = true;
      this.favoriteType = 'favorite';
      this.likes = Number(this.likes) + 1;
    } else {
      this.fillColor = false;
      this.favoriteType = 'favorite_border';
      this.likes = Number(this.likes) - 1;
    }
  }

}
