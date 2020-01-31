import React, { Component } from 'react'

export default class Sort extends Component {

    handleChange=(e) => {
        this.props.handleSort(e.target.value)
    }

    render() {
        // console.log(this.props)
        return (
            <div>
                <label> Sort by: </label>
                <select onChange={this.handleChange}>
                    <option value="All"> All</option>
                    <option value="Name"> Name</option>
                    <option value="Weight"> Weight</option>
                </select>
            </div>
        )
    }
}
