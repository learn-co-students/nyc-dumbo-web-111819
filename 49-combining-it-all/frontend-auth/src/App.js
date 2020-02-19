import React from 'react';
import {Switch, Route} from 'react-router'

import {withRouter} from 'react-router-dom'

import Form from './components/Form'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SnackContainer from './components/SnackContainer'

import ProfileContainer from './ProfileComponents/ProfileContainer'

import {connect} from 'react-redux'
import {fetchAndInitializeSnacks, initializeSnacks, saveUserToState} from './Redux/actions'



class App extends React.Component {

  componentDidMount() {
    // fetch("http://localhost:4000/snacks")
    // .then(r => r.json())
    // .then((snacks) => {
    //   this.props.initializeSnacks(snacks);
    // })


    if (localStorage.getItem("token")) {
      let token = localStorage.getItem('token')
      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `bearer ${token}`
        }
      })
      .then(r => r.json())
      .then(resp => {
        if (resp.token) {
          this.props.saveUserToState(resp);
        }
      })
    }

    this.props.fetchAndInitializeSnacks()




  }

  handleLoginSubmit = (userInfo) => {

    fetch("http://localhost:4000/login", {
      method: "POST",
      body: JSON.stringify(userInfo),
      headers: {
        "content-type": "application/json"
      }
    })
      .then(r => r.json())
      .then((resp) => {
        if (resp.token) {
          this.props.saveUserToState(resp);
          localStorage.setItem("token", resp.token)
        }
      })

  }

  handleRegisterSubmit = (userInfo) => {

  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }


  render(){
    console.log(this.props);
    return (
      <div className="App">
        <NavBar/>
        <Switch>
          <Route path="/login" render={ this.renderForm } />
          <Route path="/register" render={ this.renderForm } />
          <Route path="/profile" component={ ProfileContainer } />
          <Route path="/snacks" component={ SnackContainer } />

          <Route path="/" exact render={() => <Home /> } />
          <Route render={ () => <p>Page not Found</p> } />
        </Switch>
      </div>
    );
  }

}

export default connect(null, {fetchAndInitializeSnacks, initializeSnacks, saveUserToState})(withRouter(App));
















//
