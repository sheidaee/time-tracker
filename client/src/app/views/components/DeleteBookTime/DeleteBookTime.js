import React, { Component } from 'react';
import { connect } from "react-redux";
import { Button, Intent } from "@blueprintjs/core";

import DialogBox from "../../components/UI/DialogBox";
import { timeOperations } from "../../../state/ducks/time";

import Styles from "./DeleteBookTime.module.scss";


const dialogProps = {
  btn: {
    type: "icon",
    className: `pt-icon-standard pt-icon-cross ${Styles.DeleteBtn}`
  },
  dialog: {
    icon: "inbox",
    title: "Delete Booked Time"
  },
  customOperationBtn: true
};
  
class DeleteBookTime extends Component {
  state = {
    submitting: false
  }

  deleteBookTimeHandler = () => {
    this.setState({ submitting: true })
    this.props.onDeleteBookTime(this.props.data.id);    
    
    this.props.dialogCloseHandler();
  }
  render() {
    const { data } = this.props;
    return (
      <div className={Styles.BookTime}>
        <div className={Styles.row}>
          <div>
            <p>Are you sure about deleting this record?</p>            
          </div>
        </div>
        <div className="pt-dialog-footer">
          <div className="pt-dialog-footer-actions">
            <Button text="No" onClick={this.props.dialogCloseHandler} />
            <Button
              text="Yes"
              intent={Intent.PRIMARY}
              onClick={this.deleteBookTimeHandler} 
              disabled={this.state.submitting === true ? 'disabled' : ''} />
          </div>
        </div>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => {
  return { onDeleteBookTime: bookTimeId => dispatch(timeOperations.deleteBookTime(bookTimeId)) };
};

export default connect(null, mapDispatchToProps)(DialogBox(DeleteBookTime, dialogProps));
