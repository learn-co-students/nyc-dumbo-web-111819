import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          autoComplete="off"
        />
        <label htmlFor="content">Says:</label>
        <input
          id="content"
          type="text"
          name="content"
          autoComplete="off"
        />
        <input type="submit" value="Send"/>
      </form>
    );
  }

}

export default Form;
