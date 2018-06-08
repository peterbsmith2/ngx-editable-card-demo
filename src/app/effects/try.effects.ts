import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { ApiService } from '../api.service';
import { TryActionTypes, Get, GetComplete, Put, PutComplete, SetRandom } from '../actions/try.actions';

import {
  map,
  mergeMap,
  switchMap,
  skip,
  takeUntil,
  catchError,
} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class TryEffects {
  @Effect()
  getTry$: Observable<Action> = this.actions$.pipe(
    ofType<Get>(TryActionTypes.GET),
    switchMap(() => {
      return this.api.getTry()
        .pipe(
          mergeMap((tries) => [
            new GetComplete(tries),
            new SetRandom()
          ])
        );
    })
  );

  @Effect()
  putTry$: Observable<Action> = this.actions$.pipe(
    ofType<Put>(TryActionTypes.PUT),
    switchMap((action) => {
      return this.api.putTry(action.payload)
        .pipe(
          map(data => new PutComplete(data))
        );
    })
  );

  constructor(
    private actions$: Actions,
    private api: ApiService,
  ) { }
}
