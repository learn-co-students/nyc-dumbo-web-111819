import React, {useState} from 'react'
import '../App.css';
// import Form from './Form'
// import QuoteContainer from './QuoteContainer'

const AppHook = () => {
    const [something, setSomething] = useState(1)
    console.log(something)
    console.log(setSomething)
    // const useState = (initialState) => {
    //     var _val = initialState
    //     const setState = (newState) => {
    //         // debugger
    //         _val = newState
    //     }
    //     return [_val, setState]
    // }

    return (
        <div className="App">
            {/* <button onClick={this.handleAddMode}>Add Quote</button> */}
            {/* {
            this.state.addQuote ? 
            <Form handleAddQuote={this.handleAddQuote}/>
            :
            <QuoteContainer quotes={this.state.quotes}/>
            } */}
      </div>
    )
}

export default AppHook