import {
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MultimediaService } from '@shared/services/multimedia.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrls: ['./media-player.component.css'],
})
export class MediaPlayerComponent implements OnInit, OnDestroy {
  @ViewChild('progressBar') progressBar: ElementRef = new ElementRef('');

  listObserver$: Array<Subscription> = [];
  state: string = 'paused';

  constructor(public _multimediaService: MultimediaService) {}

  ngOnInit(): void {
    const observer$ = this._multimediaService.playerStatus$.subscribe(
      (status) => (this.state = status)
    );

    this.listObserver$ = [observer$];
  }

  ngOnDestroy(): void {
    this.listObserver$.forEach((suscription) => suscription.unsubscribe);
  }

  handlePosition(event: MouseEvent) {
    const { clientX } = event;
    const elNative: HTMLElement = this.progressBar.nativeElement;
    const { x, width } = elNative.getBoundingClientRect();
    const clickX = clientX - x;
    const porcentage = (clickX * 100) / width;

    this._multimediaService.seekAudio(porcentage);
  }
}
