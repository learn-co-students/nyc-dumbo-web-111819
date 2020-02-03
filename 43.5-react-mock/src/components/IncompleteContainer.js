import SearchBarComponent from './SearchBarComponent'
import ToDoCard from './ToDoCard'
import React, { Component } from 'react';

export default class IncompleteContainer extends Component {

    // When implementing the search bar, consider implementing state here to make it dynamic. 
    // i.e everytime you type in the input field, the ToDos are immediately filtered
    
    state = {
        searchTerm: ""
    }

    // When implementing the search bar, consider implementing a function that handles setState and pass this function down to 
    // SearchBarComponent
  
    handleOnChange = (e) => {
        // console.log(e.target.value)
        this.setState({
          searchTerm: e.target.value
        })
    }

    // When implementing the search term, consider implementing a function that FILTERs the todos.
    // To determine which to filter, find out which ToDo title INCLUDES the search term typed.

    handleFilter = () => {
      // this.props.todos
      // filtering method of search term
      const filter = this.props.todos.filter(todo => todo.title.toLowerCase().includes(this.state.searchTerm.toLowerCase()))
      return filter
    }

  render() {
    // console.log(this.state.searchTerm)
    return (
        <div>
            <h1>Incomplete Todos</h1>
            <SearchBarComponent handleOnChange={this.handleOnChange}/>
            {/* Render ToDo Card for each ToDo */} 
            {/* Which Array method can you use? */}
            {
              this.handleFilter().map(todo => <ToDoCard handleRemoveTodo={this.props.handleRemoveTodo} handleCompleteChange={this.props.handleCompleteChange} key={todo.id} todo={todo}/>)
            }
        </div>
    )
  }
}
