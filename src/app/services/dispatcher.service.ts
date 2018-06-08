import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Action, ActionsSubject } from '@ngrx/store';
import { filter } from 'rxjs/operators';

@Injectable()
export class PopActions {
  _actions = new Subject<Action>();

  ofType( type: string ) {
    return this._actions.pipe(
      filter(( action: Action ) => action.type === type)
    );
  }

  nextAction( action: Action ) {
    this._actions.next(action);
  }

}

@Injectable()
export class PopActionsSubject extends ActionsSubject {
  constructor( private actions: PopActions ) {
    super();
  }

  next( action: Action ) {
    super.next(action);
    this.actions.nextAction(action);
  }
}
