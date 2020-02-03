import React, { Component } from 'react';

export default class NewToDoForm extends Component {

  state = {
    title: "",
    completed: false
  }
  
  handleFormSubmit = (e) => {
      e.preventDefault()
      // console.log("DId not refresh")
      this.props.handleNewTodo(this.state)
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    // console.log(this.state.title)
    return (
      <div>
        <form onSubmit={this.handleFormSubmit} className="ui form">
            <h1>New ToDo</h1>
            <div className="field">
                <label>Title</label>
                <input onChange={this.handleOnChange} value={this.state.value} type="text" name="title" placeholder="Title"/>
            </div>
            <button className="ui button" type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
