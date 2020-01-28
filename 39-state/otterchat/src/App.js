import React from 'react';
import './App.css';

import Message from './components/Message'

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>

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

export default App
