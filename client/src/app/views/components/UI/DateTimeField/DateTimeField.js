import React, { Component } from 'react';
import { DateTimePicker, TimePickerPrecision } from "@blueprintjs/datetime";

import Styles from "./DateTimeField.module.scss";

class DateTimeField extends Component {
  render() {
    return <DateTimePicker />;
  }
}

export default DateTimeField;