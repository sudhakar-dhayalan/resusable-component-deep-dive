import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isFavoriteFilled: boolean = true;

  tweet: object = {
    body: 'This is where our body content comes...'  ,
    isLikes: false,
    likesCount: 0
  }
}
