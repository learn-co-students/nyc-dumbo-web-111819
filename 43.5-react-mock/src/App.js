import React from 'react';
import './App.css';
import Header from './components/Header'
import ToDoContainer from './components/ToDoContainer'


class App extends React.Component{

  state = {
    todos: []
  }

  handleCompleteChange = (todoObj) => {
    // console.log(todoObj)
    const updatedToDoObj = {
      ...todoObj,
      completed: !todoObj.completed
    }

    const newArray = this.state.todos.map(todo => {
      if(todo.id === updatedToDoObj.id){
        return updatedToDoObj
      }
      return todo
    })

    this.setState({
      todos: newArray
    })
  }

  handleNewTodo = (newTodo) => {
    // console.log(newTodo)
    const newArray = [...this.state.todos, newTodo]
    this.setState({
      todos: newArray
    })
  }

  handleRemoveTodo = (todoToDelete) => {
    // console.log(todoToDelete)
    const newArray = this.state.todos.filter(todo => todo.id !== todoToDelete.id)
    this.setState({
      todos: newArray
    })
  }

  componentDidMount(){
    fetch(`http://localhost:3000/todos`)
    .then(res => res.json())
    .then(todosData => {
      this.setState({
        todos: todosData
      })
    })
  }

  render(){
    return (
      <div className="App">
        <Header/>
        <ToDoContainer handleRemoveTodo={this.handleRemoveTodo} handleNewTodo={this.handleNewTodo} handleCompleteChange={this.handleCompleteChange} todos = {this.state.todos}/>
      </div>
    );
  }
}

export default App;
