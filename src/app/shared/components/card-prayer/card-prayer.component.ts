import { Component, Input } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-card-prayer',
  templateUrl: './card-prayer.component.html',
  styleUrls: ['./card-prayer.component.css'],
})
export class CardPrayerComponent {
  @Input() mode: 'small' | 'big' = 'small';
  @Input() track!: TrackModel;
}
