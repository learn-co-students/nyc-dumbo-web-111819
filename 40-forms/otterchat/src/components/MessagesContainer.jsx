import React, { Component } from 'react';
import Message from './Message'

class MessagesContainer extends Component {

  render() {
    return (
      <>
        <Message
          arr={[1,2,3,4]}
          bool={false}
          num={123}
          obj={{this: "Will work"}}
          func={() => {}}
        />
        <Message name="John" content="I enjoy basketball"/>
        <Message name="Mary" content="I love soccer"/>
        <Message name="Sarah" content="Rocks rock"/>
        <Message name="BLAHBLAHBLAH" content="HUEHUEHUE"/>
      </>
    );
  }

}

export default MessagesContainer;
