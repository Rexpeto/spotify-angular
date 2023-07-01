import { Component } from '@angular/core';
import { SearchService } from '@modules/history/services/search.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css'],
})
export class HistoryPageComponent {
  listResult$: Observable<any> = of();

  constructor(private _searchService: SearchService) {}

  receiveData(term: string): void {
    this.listResult$ = this._searchService.searchTrack$(term);
  }
}
