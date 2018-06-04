import React, { Component } from 'react';
import { connect } from "react-redux";
import * as moment from "moment";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { Button, Intent } from "@blueprintjs/core";


import { timeOperations } from "../../../state/ducks/time";
import DialogBox from "../../components/UI/DialogBox";
import TimeField from "../UI/TimeField";
import DateInputField from "../UI/DateInputField";
import TextAreaField from "../UI/TextAreaField";
import { classNames } from "../../../utilities";

import Styles from './EditBookTime.module.scss';

/* book time dialog props */
const dialogProps = {
  btn: {
    type: "icon",
    className: `pt-icon-standard pt-icon-edit ${Styles.EditBtn}`,
    text: "Book"
  },
  dialog: {
    icon: "inbox",
    title: "Book Time"
  },
  customOperationBtn: true
};    

const validate = values => {
  const errors = {}

  if (moment(values.clockIn).format("H:mm:ss") === '0:00:00')
    errors.clockIn = 'Invalid time'

  if (!values.clockOut)
    errors.clockOut = 'Invalid clock Out'

  if (!values.description)
    errors.description = 'Required'      

  return errors
}

const createRenderer = render => ({ input, meta, label, ...rest }) => {
  return <React.Fragment>
      <div className={rest.captionClassName}>{label}</div>
      <div className={classNames(rest.dataClassName, 'pt-form-group', 'pt-intent-danger')}>
        {render(input, label, meta.touched, meta.error)}
        <div className="pt-form-helper-text">
          {meta.touched ? meta.error : ""}
        </div>
      </div>
    </React.Fragment>;
}

const RenderTime = createRenderer((input, label, touched, error) => (
  <TimeField
    {...input}  
  />
));

const RenderDateTime = createRenderer((input, label, touched, error) => (
  <DateInputField
    {...input}
    canClearSelection={false}
  />
));

const RenderTextArea = createRenderer((input, label, touched, error) => (
  <TextAreaField
    {...input}
  />  
));


/**
 * Book time form
 * 
 * @class BookTime
 * @extends {Component}
 */
class EditBookTime extends Component {    
  constructor(props) {
    super(props);
    
    this.props.initialize({
      clockIn: new Date(
        `${this.props.data.clock_in} ${this.props.data.duration}`
      ),
      clockOut: new Date(this.props.data.clock_out),
      description: this.props.data.description
    }); 
  }

  /**
   * Sending book time info to the redux to save them on the server side
   *
   * @param closeDialogHandler {function} - this comes from DialogBox component
   *
   * @memberof BookTime
   */
  EditBookTimeHandler = formValues => {
    return new Promise(async (resolve) => { 
      const [clockIn, clockOut, description] = [
        moment(formValues.clockIn).format("YYYY-MM-DD HH:mm:ss"),
        moment(formValues.clockOut).format("YYYY-MM-DD HH:mm:ss"),
        formValues.description
      ];
      
      await this.props.onEditBookTime( this.props.data.id, clockIn, clockOut, description)
      await this.props.dialogCloseHandler()
    })    
  };

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form
        onSubmit={handleSubmit(this.EditBookTimeHandler)}
        className={Styles.BookTime}>
        <div className={Styles.row}>
          <div>
            <Field
              name="clockIn"
              label="Book Time"
              component={RenderTime}
              captionClassName={Styles.bookTimeCaption}
              dataClassName={Styles.bookTimeData}
            />
          </div>
          <div>
            <Field
              name="clockOut"
              label="Clock Out"
              component={RenderDateTime}
              captionClassName={Styles.clockOutCaption}
              dataClassName={Styles.clockOutData}
            />
          </div>
        </div>
        <div className={Styles.row}>
          <Field
            name="description"
            label="Description"
            component={RenderTextArea}
            captionClassName={Styles.descriptionCaption}
            dataClassName={Styles.descriptionData}
          />
        </div>
        <div className="pt-dialog-footer">
          <div className="pt-dialog-footer-actions">
            <Button 
              text="close" 
              onClick={this.props.dialogCloseHandler}  />
            <Button
              text="save"
              type="submit"
              intent={Intent.PRIMARY}              
              disabled={submitting === true ? 'disabled' : ''}
            />
          </div>
        </div>
      </form>
    );
  }
}


// Decorate with connect to read form values
const selector = formValueSelector("BookTime");

const mapStateToProps = state => ({
  timer   : state.app.time.timer,
  counter : state.app.time.counter,
  clockIn : selector(state, "clockIn"),
  clockOut: selector(state, "clockOut")
});

const mapDispatchToProps = dispatch => {
  return { onEditBookTime: (id, clockIn, clockOut, description) => dispatch(timeOperations.editBookTime(id, clockIn, clockOut, description) ) };
};

EditBookTime = reduxForm({
  form: "EditBookTime",
  initialValues: {
    clockIn    : new Date(),
    clockOut   : new Date(moment().format()),
    description: ""
  },
  validate
})(EditBookTime);

export default connect(mapStateToProps, mapDispatchToProps)(DialogBox(EditBookTime, dialogProps));