import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() isFavoriteFilled;

  toggle(): void {
    this.isFavoriteFilled = !this.isFavoriteFilled;
  }
}
