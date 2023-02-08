import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, catchError } from 'rxjs/operators';

import * as TodoActions from './todo.actions';
import { TodoService } from './service/todo.service';

@Injectable()
export class TodoEffects {
  constructor(private actions$: Actions, private todoService: TodoService) {}

  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TodoActions.loadTodos),
      switchMap(() => {
        return this.todoService.getTodos().pipe(
          map((todos) => TodoActions.loadTodosSuccess({ data: todos })),
          catchError((error) => of(TodoActions.loadTodosFailure({ error })))
        );
      })
    )
  );
}
