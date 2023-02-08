import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { todoReducer, TodoState } from '../todo/todo.reducer';

export interface State {
  todo: TodoState;
}

export const reducers: ActionReducerMap<State> = {
  todo: todoReducer,
};

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
