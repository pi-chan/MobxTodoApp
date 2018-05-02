import { observable, action } from 'mobx';

export default class TodoStore {
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
