import React from 'react';
import Snack from './Snack'
import {connect} from 'react-redux'


const SnackContainer = (props) => {
  return(
    <div>
      <h1>All the Snacks!</h1>
      <ul>
        {props.snacks.map(snack => <Snack key={snack.id} snack={snack}/>)}
      </ul>
    </div>
  )
}



const getInfo = (state) => {
  return {
    snacks: state.snacks.all
  }
}

export default connect(getInfo)(SnackContainer);
