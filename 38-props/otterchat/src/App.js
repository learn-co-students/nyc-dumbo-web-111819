import React from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './components/Message'

// functional Component
// Needs to return JSX

function App(props) {
  return (
    <div className="App">
      <h1> {props.title} </h1>
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
      <Message name="BLHAILFHS" nounOfOurChoice="ghjadiojfs"/>
    </div>

  );
}

export default App
