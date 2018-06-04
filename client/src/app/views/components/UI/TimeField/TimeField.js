import React, { Component } from 'react';
import { TimePicker, TimePickerPrecision } from "@blueprintjs/datetime";

import Styles from './TimeField.module.scss';

class TimeField extends Component {
  render() {
    return (      
        
        <TimePicker showArrowButtons="true" 
                    selectAllOnFocus="true" 
                    precision={TimePickerPrecision.SECOND}                    
                    className={Styles.TimeField}                                        
                    {...this.props} />      
    )
  }
}

export default TimeField;