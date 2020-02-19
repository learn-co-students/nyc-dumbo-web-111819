import React, { Component } from 'react';
import {connect} from 'react-redux'
import {saveSnackToUserSnacks} from '../Redux/actions'

class NewSnackForm extends Component {

  state = {
    snack_id: 0
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.snack_id > 0) {

      fetch("http://localhost:4000/user_snacks", {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
          'content-type': "application/json",
          "Authorization": `bearer ${this.props.token}`
        }
      })
      .then(r => r.json())
      .then((user_snack) => {
        this.props.saveSnackToUserSnacks(user_snack)
      })


    }

  }

  handleChange = (e) => {
    let {name, value} = e.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Snack Name:</label>
        <select name="snack_id" onChange={this.handleChange} value={this.state.snack_id}>
          {this.props.snacks.map(snack => {
            return <option key={snack.id} value={snack.id}>{snack.name}</option>
          })}
        </select>
        <input type="submit" value="Create New Snack" />
      </form>
    );
  }

}




const mstp = (state) => {
  return {
    snacks: state.snacks.all,
    token: state.userInfo.token
  }
}











export default connect(mstp, {saveSnackToUserSnacks} )(NewSnackForm);
