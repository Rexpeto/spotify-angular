import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TrackService {
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {}

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => data),
      catchError((err) => {
        return of([]);
      })
    );
  }

  getAllRandom$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`).pipe(
      map(({ data }: any) => data.reverse()),
      catchError((err) => {
        return of([]);
      })
    );
  }
}
