import { EventEmitter, Injectable } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MultimediaService {
  callback: EventEmitter<any> = new EventEmitter<any>();

  public audio!: HTMLAudioElement;
  public trackInfo$: BehaviorSubject<any> = new BehaviorSubject(undefined);

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe((resOk) => {
      if (resOk) {
        this.setAudio(resOk);
      }
    });
  }

  public setAudio(track: TrackModel) {
    this.audio.src = track.url;
    this.audio.play();
  }
}
