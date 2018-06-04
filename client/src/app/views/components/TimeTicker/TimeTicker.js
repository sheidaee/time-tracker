import React from 'react';

import Styles from './TimeTicker.module.scss';
import Timer from '../../containers/Timer';
import SearchBar from '../SearchBar';
import BookTimeList from "../BookTimeList";

const TimeTicker = () => {
  
  return <div className={Styles.TimeTicker}>
      <Timer />
      <SearchBar />
      <BookTimeList />        
    </div>;  
}

export default TimeTicker;