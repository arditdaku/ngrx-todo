import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffects } from './todo.effects';
import { TodoListComponent } from './todo-list/todo-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    EffectsModule.forFeature([TodoEffects]),
  ],
  exports: [TodoListComponent, EffectsModule],
})
export class TodoModule {}
