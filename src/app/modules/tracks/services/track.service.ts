import { Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/track.json';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  dataTracksTrending$: Observable<TrackModel[]> = of([]);
  dataTracksRandom$: Observable<any> = of([]);

  constructor() {
    const { data } = dataRaw;
    this.dataTracksTrending$ = of(data);

    this.dataTracksRandom$ = new Observable((observer) => {
      const trackExample: TrackModel = {
        _id: 10,
        name: 'ejemplo',
        album: 'ejemplo',
        cover: 'ejemplo',
        artist: {
          name: 'Ejemplo',
          nickname: 'Ejemplo',
          nationality: 'Ve',
        },
        url: 'http:/local',
      };

      setTimeout(() => {
        observer.next([trackExample]);
      }, 3000);
    });
  }
}
