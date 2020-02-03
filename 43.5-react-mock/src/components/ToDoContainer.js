import React, { Component } from 'react';
import CompletedContainer from './CompletedContainer'
import IncompleteContainer from './IncompleteContainer'
import NewToDoForm from './NewToDoForm'

export default class ToDoContainer extends Component {
  
  render() {
    // console.log(this.props.todos)
    const complete = this.props.todos.filter(todo => todo.completed)
    const incomplete = this.props.todos.filter(todo => !todo.completed)
    return (
      <div id="todo-container">
        <NewToDoForm handleNewTodo = {this.props.handleNewTodo}/>
        <CompletedContainer handleRemoveTodo={this.props.handleRemoveTodo} handleCompleteChange={this.props.handleCompleteChange} todos={complete} />
        <IncompleteContainer handleRemoveTodo={this.props.handleRemoveTodo} handleCompleteChange={this.props.handleCompleteChange} todos={incomplete}/>
      </div>
    );
  }
}
