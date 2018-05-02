import React, { Component } from 'react';
import {
  FlatList,
  TextInput,
  ScrollView,
  Text,
  View,
  Button,
} from 'react-native';
import { inject, observer} from 'mobx-react';

@inject('todo')
@observer
export default class TodoScreen extends Component {
  constructor() {
    super();
    this.state = {
      inputText: '',
    };
  }

  onPressAdd = () => {
    const { todo } = this.props;
    todo.onAdd(this.state.inputText);
    this.setState({ inputText: "" })
  };

  renderTodo = ({ item }) => (
    <View
      style={{
        padding: 10,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#888',
      }}
    >
      <Text>{item}</Text>
    </View>
  );

  render() {
    const { todo } = this.props;

    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        <View
          style={{
            height: 50,
            padding: 10,
            backgroundColor: '#F0F0F0',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          <TextInput
            style={{
              flex: 1,
              height: 30,
              borderRadius: 5,
              borderColor: '#EEE',
              backgroundColor: 'white',
              paddingHorizontal: 10,
            }}
            onChangeText={text => this.setState({ inputText: text })}
            value={this.state.inputText}
          />
          <Button
            style={{ width: 50, backgroundColor: 'blue' }}
            title="Add"
            onPress={this.onPressAdd}
          />
        </View>
        <FlatList
          style={{ flex: 1 }}
          data={todo.todos}
          renderItem={this.renderTodo}
          keyExtractor={(item, index) => index.toString()}
        />
      </ScrollView>
    );
  }
}
