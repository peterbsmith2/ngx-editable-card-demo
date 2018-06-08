import { Action } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Try } from '../models/try.model';
import { TryActionTypes, TryActions } from '../actions/try.actions';
import { ChapterActionTypes, ChapterActions } from '../actions/chapter.actions';

export interface State extends EntityState<Try> {
  selectedId: string | number;
  editing: boolean;
}

export const adapter: EntityAdapter<Try> = createEntityAdapter<Try>({


});

export const initialState: State = adapter.getInitialState({
  selectedId: null,
  editing: false
});

export function reducer(state = initialState, action: TryActions | ChapterActions): State {
  switch (action.type) {
    case TryActionTypes.GET_COMPLETE:
      return adapter.addMany(action.payload, state);

    case TryActionTypes.SET_RANDOM:
      const randomIndex = Math.floor(Math.random() * (state.ids.length));
      const randomId = state.ids[randomIndex];
      return {
        ...state,
        selectedId: randomId
      };

    // scenario: change chapter 10's title, and do it for all
    // case ChapterActionTypes.UPDATE_ONE_COMPLETE:
    //   const idsToUpdate = (state.ids as string[]).filter((id) => state.entities[id].chapter.id === action.payload.id);
    //   const changes = idsToUpdate.map(id => ({
    //     id,
    //     changes: { chapter: {
    //       id: action.payload.id,
    //       name: action.payload.name
    //     } }
    //   }));
    //   return adapter.updateMany(changes, state);
    case TryActionTypes.EDIT:
      return {
        ...state,
        editing: !state.editing
      };

    case TryActionTypes.PUT_COMPLETE:
      const changes = {
        id: action.payload.id,
        changes: {
          text: action.payload.text,
          title: action.payload.title,
          page: action.payload.page,
        }
      };
      return adapter.updateOne(changes, {
        ...state,
        editing: false
      });

    default:
      return state;
  }
}

export const {
  selectIds: selectTryIds,
  selectEntities: selectTryEntities
} = adapter.getSelectors();

export const selectedId = (state: State) => state.selectedId;
export const editing = (state: State) => state.editing;
