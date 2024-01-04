import React, { Component } from 'react'

export class DisplayClass extends Component {
  render() {
    return (
      <div>
        <h3>Hi this display name</h3>
        <h3>this is : {this.props.name}</h3>
      </div>
    )
  }
}

export default DisplayClass