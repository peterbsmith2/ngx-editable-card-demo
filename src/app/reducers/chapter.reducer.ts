import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Chapter } from '../models/chapter.model';
import { ChapterActions, ChapterActionTypes } from '../actions/chapter.actions';

export interface State extends EntityState<Chapter> {

}

export const adapter: EntityAdapter<Chapter> = createEntityAdapter<Chapter>({

});

export const initialState: State = adapter.getInitialState({

});

export function reducer(state = initialState, action: ChapterActions): State {
  switch (action.type) {

    case ChapterActionTypes.UPDATE_ONE_COMPLETE:
      return adapter.addOne(action.payload, state);


    default:
      return state;
  }
}
