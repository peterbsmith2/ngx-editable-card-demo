import {
  ActionReducerMap,
  createSelector,
} from '@ngrx/store';
import * as fromTry from './try.reducer';
import * as fromChapter from './chapter.reducer';


export interface State {
  try: fromTry.State;
  chapter: fromChapter.State;
}

export const reducers: ActionReducerMap<State> = {
  try: fromTry.reducer,
  chapter: fromChapter.reducer,
};

// try
export const selectTry = (state: State) => state.try;

export const selectTryIds = createSelector(
  selectTry,
  fromTry.selectTryIds
);

export const selectTryEntities = createSelector(
  selectTry,
  fromTry.selectTryEntities
);

export const selectTrySelectedId = createSelector(
  selectTry,
  fromTry.selectedId
);

export const selectTryEditing = createSelector(
  selectTry,
  fromTry.editing
);

export const getSelectedTry = createSelector(
  selectTryEntities,
  selectTrySelectedId,
  (entities, id) => entities[id]
);
