import { Action, createReducer, on } from '@ngrx/store';
import { Todo } from './todo.model';
import {
  loadTodos,
  loadTodosSuccess,
  loadTodosFailure,
  completeTodo,
  completeTodoFailure,
  completeTodoSuccess,
  updateTodo,
  updateTodoSuccess,
  updateTodoFailure,
} from './todo.actions';

export const todoFeatureKey = 'todo';

export interface TodoState {
  todoList: Todo[];
  status: 'pending' | 'loading' | 'error' | 'success';
  error: any;
}

export const initialState: TodoState = {
  todoList: [],
  status: 'pending',
  error: '',
};

export const todoReducer = createReducer(
  initialState,
  on(loadTodos, (state) => ({ ...state, status: 'loading' })),
  on(loadTodosSuccess, (state, { data }) => ({
    ...state,
    todoList: data,
    error: '',
    status: 'success',
  })),
  on(loadTodosFailure, (state, { error }) => ({
    ...state,
    todoList: [],
    error,
    status: 'error',
  })),
  on(completeTodo, (state, { todo }) => ({
    ...state,
    todoList: state.todoList.map((t: Todo) => {
      console.log(t, todo);
      if (t.id == todo.id) {
        return {
          ...t,
          completed: !t.completed,
        };
      }
      return t;
    }),
  }))
);
