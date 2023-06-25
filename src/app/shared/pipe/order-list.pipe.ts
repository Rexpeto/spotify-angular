import { Pipe, PipeTransform } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Pipe({
  name: 'orderList',
})
export class OrderListPipe implements PipeTransform {
  transform(
    value: Array<any>,
    title: string | null,
    sort: string = 'asc'
  ): TrackModel[] {
    try {
      if (title === null) {
        return value;
      }

      const tmpList = value.sort((a, b) => {
        if (a[title] < b[title]) {
          return -1;
        } else if (a[title] === b[title]) {
          return 0;
        } else if (a[title] > b[title]) {
          return 1;
        }
        return 1;
      });

      return sort === 'asc' ? tmpList : tmpList.reverse();
    } catch (e) {
      console.log(e);
      return value;
    }
  }
}
