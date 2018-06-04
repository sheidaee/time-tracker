import React from 'react';

import DialogBox from "../../components/UI/DialogBox";

import Styles from "./BookTimeDetails.module.scss";


const dialogProps = {
  btn: {
    type: "icon",
    className: `pt-icon-standard pt-icon-eye-open ${Styles.ViewBtn}`
  },
  dialog: {
    icon: "inbox",
    title: "Booked Time"
  },
  customOperationBtn: true
};
  
const BookTimeDetails = (props) => {
  const { data } = props;
  
  return <div className={Styles.BookTime}>
          <div className={Styles.row}>
            <div>
              <div className={Styles.clockInCaption}>Clock in:</div>
              <div className={Styles.data}>{data["clock_in"]}</div>
            </div>
            <div>
              <div className={Styles.clockOutCaption}>Clock Out:</div>
              <div className={Styles.data}>{data["clock_out"]}</div>
            </div>
          </div>
          <div className={Styles.singleRow}>
            <div className={Styles.durationCaption}>Duration:</div>
            <div className={Styles.durationData}>{data["duration"]}</div>
          </div>
          <div className={Styles.singleRow}>
            <div className={Styles.descriptionCaption}>Description:</div>
            <div className={Styles.descriptionData}>{data["description"]}</div>
          </div>
        </div>;

};

export default DialogBox(BookTimeDetails, dialogProps);
