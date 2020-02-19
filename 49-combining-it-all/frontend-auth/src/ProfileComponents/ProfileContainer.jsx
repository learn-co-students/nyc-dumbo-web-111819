import React, { Component } from 'react';
import Snack from '../components/Snack'
import NewSnackForm from './NewSnackForm'
import {connect} from 'react-redux'



class ProfileContainer extends Component {

  render() {
    let {user} = this.props

    return (
      <div>
        <h2>{user.username}&apos;s Profile</h2>
        <h3>Snacks</h3>

        <ol>
          {user.owned_snacks.map(snack => <Snack key={snack.user_snack_id} snack={snack} />)}
        </ol>

        <NewSnackForm />

      </div>
    );
  }

}





const mapStateToProps = (state) => {
  return {
    user: state.userInfo.user
  }
}

export default connect(mapStateToProps)(ProfileContainer);














//
