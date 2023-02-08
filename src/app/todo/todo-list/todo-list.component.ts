import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadTodos, completeTodo } from '../todo.actions';
import { selectTodoList } from '../selectors/todo.selectors';
import { AppState } from '../../state/app.state';
import { Todo } from '../todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  constructor(private store: Store<AppState>) {}
  public todos$ = this.store.select(selectTodoList);

  ngOnInit() {
    this.store.dispatch(loadTodos());
  }

  completeTodo(todo: Todo) {
    this.store.dispatch(completeTodo({ todo }));
  }
}
