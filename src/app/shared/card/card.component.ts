import { Component, OnInit, Input } from '@angular/core';
import { __importDefault } from 'tslib';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() urlImge: string;
  @Input() likes: string;
  @Input() title: string;
  @Input() owner: string;
  @Input() datePublic: string;
  @Input() text: string;
  @Input() pictureOwner: string;

  constructor() { }

  ngOnInit(): void {
  }

}
