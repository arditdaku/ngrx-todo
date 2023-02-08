import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  getTodos() {
    return this.http.get<Todo[]>('http://localhost:3000/api/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post<Todo>('http://localhost:3000/api/todos', todo);
  }

  updateTodo(todo: Todo) {
    return this.http.put<Todo>(
      `http://localhost:3000/api/todos/${todo.id}`,
      todo
    );
  }

  deleteTodo(id: number) {
    return this.http.delete(`http://localhost:3000/api/todos/${id}`);
  }
}
