import React, { Component } from 'react';
import Message from './Message'

class MessagesContainer extends Component {

  render() {
    return (
      <div>
        <Message
          arr={[1,2,3,4]}
          bool={false}
          num={123}
          obj={{this: "Will work"}}
          func={() => {}}
        />
        <Message name={"John"} nounOfOurChoice={"Basketball"}/>
        <Message name="Mary" nounOfOurChoice="Soccer"/>
        <Message name="Sarah" nounOfOurChoice="Rocks"/>
        <Message name="BLAHBLAHBLAH" nounOfOurChoice="HUEHUEHUE"/>
      </div>
    );
  }

}

export default MessagesContainer;
