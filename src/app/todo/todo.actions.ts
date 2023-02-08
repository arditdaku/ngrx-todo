import { createAction, props } from '@ngrx/store';
import { Todo } from './todo.model';

export const loadTodos = createAction('[Todo] Load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] Load Todos Success',
  props<{ data: Todo[] }>()
);

export const loadTodosFailure = createAction(
  '[Todo] Load Todos Failure',
  props<{ error: any }>()
);

export const createTodo = createAction(
  '[Todo] Create Todo',
  props<{ todo: Todo }>()
);
export const createTodoSuccess = createAction(
  '[Todo] Create Todo ',
  props<{ todo: Todo }>()
);
export const createTodoFailure = createAction(
  '[Todo] Create Todo ',
  props<{ error: any }>()
);

export const updateTodo = createAction(
  '[Todo] Update Todo',
  props<{ todo: Todo }>()
);
export const updateTodoSuccess = createAction(
  '[Todo] Update Todo Success ',
  props<{ todo: Todo }>()
);
export const updateTodoFailure = createAction(
  '[Todo] Update Todo Failure',
  props<{ error: any }>()
);

export const completeTodo = createAction(
  '[Todo] Complete Todo ',
  props<{ todo: Todo }>()
);
export const completeTodoSuccess = createAction(
  '[Todo] Compete Todo Success ',
  props<{ todo: Todo }>()
);
export const completeTodoFailure = createAction(
  '[Todo] Complete Todo False',
  props<{ error: any }>()
);

export const unCompleteTodo = createAction(
  '[Todo] UnComplete Todo  ',
  props<{ todo: Todo }>()
);
export const unCompleteTodoSuccess = createAction(
  '[Todo] UnComplete Todo Success  ',
  props<{ todo: Todo }>()
);
export const unCompleteTodoFailure = createAction(
  '[Todo] UnComplete Todo Failure ',
  props<{ error: any }>()
);
