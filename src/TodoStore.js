import { observable, action } from 'mobx';
import { persist } from 'mobx-persist';
import remotedev from 'mobx-remotedev'

@remotedev
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
