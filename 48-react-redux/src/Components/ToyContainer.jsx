import React from 'react';
import ToyCard from './ToyCard'
import {connect} from 'react-redux'


const ToyContainer = (props) => {
  // console.log(props, "TOY CONTAINER");
  return(
    <div id="toy-collection">
      {props.toysArr.map(toyObj => <ToyCard toy={toyObj} key={toyObj.id}/>)}
    </div>
  );
}


// the return value of MSTP is an {} that will be merged into props
const mapStateToProps = (appState) => {
  return {
    toysArr: appState.toys
  }
}

let funcName = connect(mapStateToProps)
let magicalComponent = funcName(ToyContainer);

export default magicalComponent
// export default connect(mapStateToProps)(ToyContainer)
