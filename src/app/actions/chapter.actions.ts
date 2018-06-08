import { Action } from '@ngrx/store';
import { Chapter } from '../models/chapter.model';

export enum ChapterActionTypes {
  UPDATE_ONE = '[Chapter] Update One',
  UPDATE_ONE_COMPLETE = '[Chapter] Update One Complete',
}

export class UpdateOne implements Action {
  readonly type = ChapterActionTypes.UPDATE_ONE;

  constructor(public payload: Chapter) {}
}

export class UpdateOneComplete implements Action {
  readonly type = ChapterActionTypes.UPDATE_ONE_COMPLETE;

  constructor(public payload: Chapter) {}
}

export type ChapterActions
  = UpdateOne
  | UpdateOneComplete;
