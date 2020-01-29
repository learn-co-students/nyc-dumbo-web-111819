import React, { Component } from 'react';

class Form extends Component {

  state = {
    name: "Name",
    content: "Content"
  }

  handleAllChange = (evt) => {
    let {value, name} = evt.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    console.log(this.props);
    let newMessage = this.state
    this.props.addMessage(newMessage)
  }

  render() {
    const {name, content} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="off"
          value={name}
          onChange={this.handleAllChange}
        />
        <label htmlFor="content">Says:</label>
        <input
          id="content"
          type="text"
          name="content"
          autoComplete="off"
          value={content}
          onChange={this.handleAllChange}
        />
        <input type="submit" value="Send"/>
      </form>
    );
  }

}

export default Form;
