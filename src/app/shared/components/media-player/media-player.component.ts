import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover:
      'https://e-cdn-images.dzcdn.net/images/cover/9b6da786cd3ca8b286a04186b3c9079c/264x264-000000-80-0-0.jpg',
    album: '?',
    name: 'Moonlight',
  };

  ngOnInit() {}
}
