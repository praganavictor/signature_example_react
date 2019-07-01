import React, { Component } from "react";
import SignaturePad from "signature_pad";

import { Container } from "./canvasstyled";

let canvas;
let signature;
let saveSignature;
export default class src extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    canvas = this.refs.canvas;
    signature = new SignaturePad(canvas, {
      // It's Necessary to use an opaque color when saving image as JPEG;
      // this option can be omitted if only saving as PNG or SVG
      backgroundColor: "rgb(255, 255, 255)"
    });
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

  render() {
    return (
      <Container showCanvas={this.props.showCanvas}>
        <div className="signature-pad--body">
          <canvas ref="canvas" />
        </div>
        <div className="signature-pad--footer">
          <div className="description">Sign above</div>

          <div className="signature-pad--actions">
            <div>
              <button
                type="button"
                className="button clear"
                onClick={this.clearCanvas}
              >
                Clear
              </button>

              <button
                type="button"
                className="button save"
                onClick={this.saveCanvas}
              >
                Save
              </button>

              <button
                type="button"
                className="button show"
                onClick={this.showCanvas}
              >
                Show
              </button>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
