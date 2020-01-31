import React, { Component } from 'react'

export default class Filter extends Component {

    handleChange = () => {
        this.props.handleFilter()
    }

    render() {
        return (
            <div>
                <label> Greased? </label>
                    <input type="checkbox" value="greased" onChange={this.handleChange}/>
            </div>
        )
    }
}
