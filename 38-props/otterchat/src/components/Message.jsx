import React from 'react'

// class Components
// 1) Use them for state/lifecycle methods
// 2) Needs to have a render function

class Message extends React.Component {

  render(){
    let {name, nounOfOurChoice} = this.props
    console.log(this.props);
    // the return value of Render needs to be JSX because that's what will show up on the DOM
    return(
      <div>
        <h3>{ name } said:</h3>
        <p>I love { nounOfOurChoice }</p>    
      </div>
    )
  }
}





Message.defaultProps = {
  name: "Eric",
  nounOfOurChoice: "Eric"
}





export default Message;
