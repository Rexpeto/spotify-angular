import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/tracks/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservars: Array<Subscription> = [];

  constructor(private _tracksService: TrackService) {}

  ngOnInit(): void {
    this._tracksService
      .getAllTracks$()
      .subscribe(
        ({ data }) => ((this.tracksRandom = data), (this.tracksTrending = data))
      );
  }

  ngOnDestroy(): void {}
}
