import { Component, OnDestroy, OnInit } from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  listObserver$: Array<Subscription> = [];

  constructor(public _multimediaService: MultimediaService) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.listObserver$.forEach((suscription) => suscription.unsubscribe);
  }
}
