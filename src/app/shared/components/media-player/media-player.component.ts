import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  mockCover: TrackModel = {
    _id: 1,
    cover:
      'https://e-cdn-images.dzcdn.net/images/cover/9b6da786cd3ca8b286a04186b3c9079c/264x264-000000-80-0-0.jpg',
    album: '?',
    name: 'Moonlight',
    artist: {
      name: 'XXXTENTACION',
      nickname: 'xxxtentacion',
      nationality: 'US',
    },
    url: 'http://localhost:4000/x.mp3',
  };

  listObserver$: Array<Subscription> = [];

  constructor(private _multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer1$: Subscription = this._multimediaService.callback.subscribe(
      (response: TrackModel) => {
        console.log('Recibiendo canción', response);
      }
    );

    this.listObserver$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach((suscription) => suscription.unsubscribe);
  }
}
