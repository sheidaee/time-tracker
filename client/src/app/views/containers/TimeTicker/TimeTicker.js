import React, { Component } from 'react';

import Styles from './TimeTicker.module.scss';
import Timer from '../Timer';
import SearchBar from '../../components/SearchBar';
import BookTimeList from "../../components/BookTimeList";

/* string
({para}: type)
bool
any
string
func
type: 'primary' | 'link' */

class TimeTicker extends Component {
  /*updateTimeHandler = time => {
    console.log(time);

    const currentTime       = moment();
    
    const currentTimeHour   = currentTime.format("hh");
    const currentTimeMinute = currentTime.format("mm");
    const currentTimeSecond = currentTime.format("ss");
    const currentTimeState  = currentTime.format("a");

    this.setState({
      currentTimeHour,
      currentTimeMinute,
      currentTimeSecond,
      currentTimeState
    }); 
  };*/

  render() {
    return <div className={Styles.TimeTicker}>
        <Timer />
        <SearchBar />
        <BookTimeList />
        
      </div>;
  }
}


export default TimeTicker;