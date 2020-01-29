import React from 'react';
import './App.css';

import MessagesContainer from './components/MessagesContainer'

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <h1>{this.props.title}</h1>
        <MessagesContainer/>
      </div>
    );
  }

}


export default App
