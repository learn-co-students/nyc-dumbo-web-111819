import React, { Component } from 'react';

export default class Form extends Component {
  state = {
      author: "",
      quote: ""
  }

  handleOnChange = (e) => {
    this.setState({
        [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    this.props.handleAddQuote(this.state)
  }

  render() {
    return (
      <div>
          <h1>Add Quote Form</h1>
          <form onSubmit={this.handleOnSubmit}>
              <fieldset>
                <legend>Edit User</legend>
                <label>Author</label>
                <input 
                    type="text" 
                    value={this.state.author} 
                    onChange={this.handleOnChange} 
                    autoComplete="off" name="author" 
                    placeholder="author"
                    required
                />
                <label>Quote</label>
                <input 
                    type="text" 
                    value={this.state.quote} 
                    onChange={this.handleOnChange} 
                    autoComplete="off" 
                    name="quote" 
                    placeholder="quote"
                    required
                />
                <input type="submit" value="Submit"/>
              </fieldset>
          </form>
      </div>
    );
  }
}
