import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

import {
  getAllRandom$,
  getAllTracks$,
} from '@modules/tracks/services/trackV2.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css'],
})
export class TracksPageComponent {
  tracksTrending: Array<TrackModel> = [];
  tracksRandom: Array<TrackModel> = [];
  listObservars: Array<Subscription> = [];

  constructor() {
    getAllTracks$().subscribe((res) => {
      this.tracksTrending = res;
    });

    getAllRandom$().subscribe((res) => {
      this.tracksRandom = res;
    });
  }
}
