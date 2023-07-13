import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { environment } from 'src/environments/environment';

const URL = environment.api;

export const getAllTracks$ = (): Observable<any> => {
  return inject(HttpClient)
    .get(`${URL}/tracks`)
    .pipe(
      map(({ data }: any) => data),
      catchError((err) => {
        return of([]);
      })
    );
};

export const getAllRandom$ = (): Observable<any> => {
  return inject(HttpClient)
    .get(`${URL}/tracks`)
    .pipe(
      map(({ data }: any) => data.reverse()),
      catchError((err) => {
        return of([]);
      })
    );
};
