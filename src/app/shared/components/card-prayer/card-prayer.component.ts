import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '@shared/services/multimedia.service';

@Component({
  selector: 'app-card-prayer',
  templateUrl: './card-prayer.component.html',
  styleUrls: ['./card-prayer.component.css'],
})
export class CardPrayerComponent {
  constructor(private _multimediaService: MultimediaService) {}

  @Input() mode: 'small' | 'big' = 'small';
  @Input() track: TrackModel = {
    _id: '',
    name: '',
    artist: {
      name: '',
      nickname: '',
      nationality: '',
    },
    album: '',
    cover: '',
    duration: {
      start: 0,
      end: 222,
    },
    url: '',
  };

  sendPlay(track: TrackModel) {
    this._multimediaService.trackInfo$.next(track);
  }
}
