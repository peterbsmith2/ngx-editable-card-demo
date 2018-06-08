import { Action } from '@ngrx/store';

export enum TryActionTypes {
  GET = '[Try] Get',
  GET_COMPLETE = '[Try] Get Complete',
  PUT = '[Try] Put',
  PUT_COMPLETE = '[Try] Put Complete',
  SET_RANDOM = '[Try] Set Random',
  EDIT = '[Try] Edit',
}

export class Get implements Action {
  readonly type = TryActionTypes.GET;
}

export class GetComplete implements Action {
  readonly type = TryActionTypes.GET_COMPLETE;

  constructor(public payload: any) {}
}

export class Put implements Action {
  readonly type = TryActionTypes.PUT;

  constructor(public payload: any) {}
}

export class PutComplete implements Action {
  readonly type = TryActionTypes.PUT_COMPLETE;

  constructor(public payload: any) {}
}

export class SetRandom implements Action {
  readonly type = TryActionTypes.SET_RANDOM;
}

export class Edit implements Action {
  readonly type = TryActionTypes.EDIT;
}

export type TryActions
  = Get
  | GetComplete
  | Put
  | PutComplete
  | SetRandom
  | Edit;
