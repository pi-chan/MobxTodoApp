import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';

export default class TodoStore {
  @persist('list')
  @observable todos = [];

  @action.bound
  onAdd(todo) {
    this.todos = [...this.todos, todo];
  }

  @action.bound
  onDelete(todo) {
    this.todos = this.todos.filter(t => t !== todo);
  }
}
