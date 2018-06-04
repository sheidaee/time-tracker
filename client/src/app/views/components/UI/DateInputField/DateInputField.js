import React from 'react';
import moment from 'moment';
import { DateInput, TimePickerPrecision } from "@blueprintjs/datetime";

class DateInputField extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value;
  }

  FORMATS = {
    formatDate: date => date.toLocaleString(),
    placeholder: this.props.placeholder,
    parseDate: str => new Date(str)
  };

  render() {
    return (
      <DateInput
          format="MMMM Do, YYYY HH:mm:ss"                    
          timePrecision={TimePickerPrecision.SECOND}
          {...this.FORMATS}                    
          minDate={
            new Date(
              moment()
                .subtract(90, "years")
                .format()
            )
          }
          {...this.props}
        />
    );
  }
}

// export const FORMATS = {
//     formatDate: date => date.toLocaleString(),
//     placeholder: "JS Date",
//     parseDate: str => new Date(str)
// };

export default DateInputField;
