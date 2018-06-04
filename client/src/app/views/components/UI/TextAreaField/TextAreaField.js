import React, { Component } from 'react';
import { TextArea } from "@blueprintjs/core";

class TextAreaField extends Component {
  render() {
    return <TextArea {...this.props} />;
  }
}

export default TextAreaField;