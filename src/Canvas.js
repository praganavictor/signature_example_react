import React, { Component } from "react";
import SignaturePad from "signature_pad";

import { Container, Signature } from "./canvasstyled";

let canvas;
let signature;
let saveSignature;
export default class src extends Component {
  constructor(props) {
    super(props);
    this.state = {
      canvas: props.showCanvas
    };
  }
  componentDidMount() {
    canvas = this.refs.canvas;
    signature = new SignaturePad(canvas, {
      // It's Necessary to use an opaque color when saving image as JPEG;
      // this option can be omitted if only saving as PNG or SVG
      backgroundColor: "rgb(255, 255, 255)"
    });
  }

  componentDidUpdate() {
    this.toggleCanvas();
  }

  clearCanvas = () => {
    signature.clear();
  };

  saveCanvas = () => {
    saveSignature = signature.toDataURL();
  };

  showCanvas = () => {
    signature.fromDataURL(saveSignature);
  };

  toggleCanvas = () => {
    if (this.props.showCanvas !== this.state.canvas)
      this.setState({ canvas: !this.state.canvas });
  };

  render() {
    console.log("this.state.canvas", this.state.canvas);
    return (
      <Container propcanvas={this.state.canvas}>
        <Signature ref="canvas" width="500" height="300" />
        <div>
          <p>Assine acima</p>
          <div>
            <button type="button" onClick={this.clearCanvas}>
              Clear
            </button>

            <button type="button" onClick={this.saveCanvas}>
              Save
            </button>

            <button type="button" onClick={this.showCanvas}>
              Show
            </button>
          </div>
        </div>
      </Container>
    );
  }
}
