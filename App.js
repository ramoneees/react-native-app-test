import React from 'react';
import { StyleSheet, Text, View, FlatList, Switch, TouchableHighlight } from 'react-native';
import { Header, AddTaskForm } from './components'

export default class App extends React.Component {
  state = {
    todos: []
  }
  doneTask = (item) => {
    item.done = !item.done;
    this.setState({ todos: [...this.state.todos] })
  }

  removeItem = () =>{
    const newItems = this.state.todos.filter(todoItem =>{
      return item.id = !todoItem.id
    })

    this.setState(todos: newItems);
  }

  renderItem = ({ item }) => (

    <View style={styles.item}>
      <Switch value={item.done}
        onValueChange={() => this.doneTask(item)} />
      <Text style={[styles.textItem, { textDecorationLine: item.done ? 'line-through' : 'none' }]}>{item.name}</Text>
     <Button style={styles.removeButton} title="X" onPress={()=> {this.removeTask(item)}} ></Button>
    </View>
  )

  extractor = (item) => item.id

  addTask = (name) => {
    this.setState({ todos: [...this.state.todos, { id: new Date(), name, done: false }] })
  }

  render() {
    return (
      <View style={styles.container}>
        <Header title="Todo app" />
        <AddTaskForm onTaskAdd={this.addTask} />
        <FlatList
          data={this.state.todos}
          renderItem={this.renderItem}
          keyExtractor={this.extractor}
          ItemSeparatorComponent={() => (
            <View style={styles.separator}> </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  item: {
    paddingLeft: 6,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center'
  },
  separator: {
    height: 1,
    backgroundColor: 'aliceblue',
    marginLeft: 6
  },
  removeButton: {
    paddingRight: 10
  }
});
