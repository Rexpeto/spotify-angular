import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { SearchService } from '@modules/history/services/search.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {
  listResult: TrackModel[] = [];

  constructor(private _searchService: SearchService) {}

  receiveData(term: string): void {
    this._searchService.searchTrack$(term).subscribe((res) => {
      this.listResult = res.data;
    });
  }
}
