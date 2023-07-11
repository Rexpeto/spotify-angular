import { OrderListPipe } from './order-list.pipe';
import * as mockRaw from '../../data/track.json';
import { TrackModel } from '@core/models/tracks.model';

describe('OrderListPipe', () => {
  it('create an instance', () => {
    const pipe = new OrderListPipe();
    expect(pipe).toBeTruthy();
  });

  //* Input and output values
  it('Input and output values', () => {
    //? Arrage
    const pipe = new OrderListPipe();
    const { data }: any = mockRaw;

    //? Act
    const result: TrackModel[] = pipe.transform(data, 'name', 'asc');

    //? Assert
    expect(result).toEqual(data);
  });
});
