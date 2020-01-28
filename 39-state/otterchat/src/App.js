import React from 'react';
import './App.css';

import MessagesContainer from './components/MessagesContainer'

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <MessagesContainer/>
    </div>

  );
}

export default App
