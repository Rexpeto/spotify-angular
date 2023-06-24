import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { MediaPlayerComponent } from './components/media-player/media-player.component';
import { HeaderUserComponent } from './components/header-user/header-user.component';
import { CardPrayerComponent } from './components/card-prayer/card-prayer.component';
import { SectionGenericComponent } from './components/section-generic/section-generic.component';

@NgModule({
  declarations: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPrayerComponent,
    SectionGenericComponent,
  ],
  imports: [CommonModule],
  exports: [
    SideBarComponent,
    MediaPlayerComponent,
    HeaderUserComponent,
    CardPrayerComponent,
    SectionGenericComponent,
  ],
})
export class SharedModule {}
