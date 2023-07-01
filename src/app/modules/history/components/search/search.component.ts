import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  @Output() callBackData: EventEmitter<any> = new EventEmitter();

  src: string = '';

  callSearch(term: string): void {
    if (term.length >= 4) {
      this.callBackData.emit(term);
    }
  }
}
