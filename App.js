/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';
import { create } from 'mobx-persist';
import { AsyncStorage } from 'react-native';

import TodoStore from './src/TodoStore';
import TodoScreen from './src/TodoScreen';

const hydrate = create({
  storage: AsyncStorage,
  jsonify: true,
});

const todoStore = new TodoStore();
const stores = {
  todo: todoStore,
};

hydrate('todos', todoStore);

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <Provider {...stores}>
        <TodoScreen />
      </Provider>
    );
  }
}

