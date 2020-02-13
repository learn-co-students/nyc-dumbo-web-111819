import React, { Component } from 'react';

export default class SampleApp extends Component {
    
    state = {
        count: 0
    }

    handleAddClick = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleMinusClick = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
        <div>
            <h1>Count: {this.state.count}</h1>
            <button onClick={this.handleAddClick}>Increase Count</button>
            <button onClick={this.handleMinusClick}>Decrease Count</button>
        </div>
        );
    }
}
