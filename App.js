/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import TodoStore from './src/TodoStore';
import TodoScreen from './src/TodoScreen';

const todoStore = new TodoStore();
const stores = {
  todo: todoStore,
};

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

