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
  public timeElapsed$: BehaviorSubject<string> = new BehaviorSubject('00:00');
  public timeRemaining$: BehaviorSubject<string> = new BehaviorSubject(
    '-00:00'
  );

  constructor() {
    this.audio = new Audio();
    this.trackInfo$.subscribe((resOk) => {
      if (resOk) {
        this.setAudio(resOk);
      }
    });

    this.listenAllEvents();
  }

  public setAudio(track: TrackModel) {
    this.audio.src = track.url;
    this.audio.play();
  }

  private listenAllEvents() {
    this.audio.addEventListener('timeupdate', this.calculateTimes, false);
  }

  private calculateTimes = () => {
    console.log('Disparando evento');

    const { duration, currentTime } = this.audio;
    this.setTimeElapsed(currentTime);
    this.setTimeRemaining(currentTime, duration);
  };

  private setTimeElapsed(currentTime: number) {
    const seconds = Math.floor(currentTime % 60);
    const minutes = Math.floor((currentTime / 60) % 60);

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;

    const displayFormat = `${displayMinutes}:${displaySeconds}`;
    this.timeElapsed$.next(displayFormat);
  }

  private setTimeRemaining(currentTime: number, duration: number) {
    const timeLeft = duration - currentTime;
    const seconds = Math.floor(timeLeft % 60);
    const minutes = Math.floor((timeLeft / 60) % 60);

    const displaySeconds = seconds < 10 ? `0${seconds}` : seconds;
    const displayMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const displayFormat = `${displayMinutes}:${displaySeconds}`;

    this.timeRemaining$.next(displayFormat);
  }
}
