import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPersonComponent } from './card-person.component';

describe('CardPersonComponent', () => {
  let component: CardPersonComponent;
  let fixture: ComponentFixture<CardPersonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardPersonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardPersonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
