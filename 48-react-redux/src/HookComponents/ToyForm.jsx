import React, { Component } from 'react';
const uuidv1 = require('uuid/v1')

class ToyForm extends Component {

  state = {
    name: "",
    image: ""
  }

  handleInput = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    let newToy = {...this.state, id: uuidv1(), likes: 0}
    console.log(newToy);
  }

  render() {
    let {name, image} = this.state
    return (
      <div className="container">
        <form className="add-toy-form" onSubmit={this.handleSubmit}>
          <h3>Create a toy!</h3>
          <input type="text" value={name} onChange={this.handleInput} autoComplete="off" name="name" placeholder="Enter a toy's name..." className="input-text"/>
          <br/>
          <input type="text" value={image} onChange={this.handleInput} autoComplete="off" name="image" placeholder="Enter a toy's image URL..." className="input-text"/>
          <br/>
          <input type="submit" name="submit" value="Create New Toy" className="submit"/>
        </form>
      </div>
    );
  }

}

export default ToyForm;
