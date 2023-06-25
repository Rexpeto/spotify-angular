import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPrayerComponent } from './components/card-prayer/card-prayer.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';
import { PlayListHeaderComponent } from './components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from './components/play-list-body/play-list-body.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPrayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPrayerComponent,
    SectionGenericComponent,
    PlayListHeaderComponent,
    PlayListBodyComponent,
  ],
})
export class SharedModule {}
