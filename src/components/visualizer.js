import React, { Component } from 'react';

export default class Visualizer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startingPoint: 0,
      inputArray: [1, 2, 3],
      direction: ['<','++'],
      functionBody: "{ return inputArray[i]; }"
    }
  }

  render() {
    return (
      <div>
        <p>for (let i = {this.state.startingPoint}; i {this.state.direction[0]} inputArray.length; i{this.state.direction[1]}) {this.state.functionBody}
        </p>
      </div>
    );
  }
}