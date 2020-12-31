import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent {

  @Input("tweet") tweetObj;

  heartColor: Object = {
    "color": "#CCC"
  };
  isLiked: boolean = false;

  countController(): void {
    if (!this.isLiked) {
      this.tweetObj.likesCount++;
      this.heartColor = {
        "color": "deeppink"
      }
    } else {
      this.tweetObj.likesCount--;
      this.heartColor = {
        "color": "#CCC"
      }
    }
    
    this.isLiked = !this.isLiked;
  }

}
