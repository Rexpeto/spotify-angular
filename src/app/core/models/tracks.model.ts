import { ArtistModel } from './artist.model';
import { DurationTrack } from './durationTrack.model';

export interface TrackModel {
  _id: string | number;
  name: string;
  album: string;
  cover: string;
  artist: ArtistModel;
  duration: DurationTrack;
  url: string;
}
