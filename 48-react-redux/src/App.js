import React from 'react';
import './App.css';

import Header from './Components/Header'
import ToyForm from './Components/ToyForm'
import ToyContainer from './Components/ToyContainer'

class App extends React.Component{

  componentDidMount() {
    // fetch()
    // .then()
    // .then(res => {
      // this.props.setToys(res)
    // })
  }

  render(){
    return (
      <>
        <Header/>
        <ToyForm/>
        <ToyContainer/>
      </>
    );
  }

}

export default App;
