import React, { Component } from 'react'
import PigTile from './PigTile'

export default class HogContainer extends Component {

    render() {
        // console.log(this.props.hogs)

        return (
            <div style={{border: "5px solid black"}}>
                {
                    this.props.hogs.map(hog => <PigTile key={`${hog.name}`} hog={hog}/>)
                }
            </div>
        )
    }
}
