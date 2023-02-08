import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from '../../state/app.state';
import { State } from '../../reducers';
import { TodoState } from '../todo.reducer';

export const selectTodos = (state: State) => state.todo;

export const selectTodoList = createSelector(
  selectTodos,
  (state: TodoState) => state.todoList
);
