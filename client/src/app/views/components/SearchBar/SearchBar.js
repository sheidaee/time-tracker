import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Card, Elevation } from "@blueprintjs/core";

import DateInputField from "../UI/DateInputField";
import TimeField from "../UI/TimeField";
import TextAreaField from "../UI/TextAreaField";
import { timeOperations } from "../../../state/ducks/time";

import Styles from './SearchBar.module.scss';

export class SearchBar extends Component {

  state = {
    clockIn: null,
    clockOut: null,
    duration: new Date("1995 01 01 00:00:00"),
    description: ""
  };

  searchHandler = () => {
    const { clockIn, clockOut, duration, description } = this.state;
    
    this.props.onSearchBookTime(this.props.bookTimeRecords, clockIn, clockOut, duration, description);
  }

  /**
   * This gets called whenever form fields are changed
   *
   * @param value {any} - field value
   * @param fieldName {string} - field name
   *
   * @memberof BookTime
   */
  fieldChangeHandler = (value, fieldName) => {
    this.setState({ [fieldName]: value });
  };

  render() {
    return (
      <Card elevation={Elevation.ONE} className={Styles.SearchBar}>
        <h5>Advanced Search</h5>
        <div className={Styles.formRow}>
          <div>
            <div className={Styles.bookFromCaption}>From:</div>
            <div className={Styles.data}>
              <DateInputField
                value={this.state.clockIn}
                onChange={v => this.fieldChangeHandler(v, "clockIn")} />
            </div>
          </div>
          <div>
            <div className={Styles.bookToCaption}>To:</div>
            <div className={Styles.data}>
              <DateInputField
                value={this.state.clockOut}
                onChange={v => this.fieldChangeHandler(v, "clockOut")} />
            </div>
          </div>
          <div>
            <div className={Styles.durationCaption}>Duration:</div>
            <div className={Styles.durationData}>
              <TimeField
                value={this.state.duration}
                onChange={v => this.fieldChangeHandler(v, "duration")} />
            </div>
          </div>
          <div>
            <div className={Styles.descriptionCaption}>Description:</div>
            <div className={Styles.descriptionData}>
              <TextAreaField 
                value={this.state.description}
                onChange={e =>
                  this.fieldChangeHandler(e.target.value, "description")} />
            </div>
          </div>
        </div>
        <Button onClick={this.searchHandler} disabled={this.props.loading}>Search</Button>
      </Card>
    );
  }
}

const mapStateToProps = state => ({
  bookTimeRecords: state.app.time.bookTimeRecords,
  loading        : state.app.time.loading
});

const mapDispatchToProps = dispatch => {
  return { onSearchBookTime: (bookTimeRecords, clockIn, clockOut, duration, description) => dispatch(timeOperations.searchBookTime(bookTimeRecords, clockIn, clockOut, duration, description)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);