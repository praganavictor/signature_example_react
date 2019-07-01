import React, { Component } from "react";
import Canvas from "./Canvas";
// import { Container } from './styles';

export default class src extends Component {
  state = {
    showCanvas: false
  };

  showCanvas = () => {
    this.setState({ showCanvas: !this.state.showCanvas });
  };

  render() {
    return (
      <div>
        <button onClick={this.showCanvas}>Show Canvas?</button>
        {this.state.showCanvas ? <Canvas /> : ""}
      </div>
    );
  }
}
