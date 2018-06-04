import _ from 'lodash';
import matchSorter from "match-sorter";
import * as moment from "moment";

import { 
    initTime, 
    updateTime, 
    fetchListComplete,
    fetchInit,
    bookTimeComplete,
    searchListComplete } from "./actions";

import { axios } from "./../../../utilities";

const fetchList = () => dispatch => {    
    dispatch(fetchInit());
    axios
    .get("/get_book_time")
    .then(response => {
        dispatch(fetchListComplete(response.data.bookTimeData));
    })
    .catch(error => {
        console.log('error');
        
        //dispatch(fetchListFailed());
    });
};

const bookTime = (clock_in, clock_out, description ) => dispatch => {
    //dispatch(addInit())
    return Promise.resolve(axios
        .post(
        `/post_book_time?clock_in=${clock_in}&clock_out=${clock_out}&description=${description}`          
        )
        .then(response => {                        
          dispatch(bookTimeComplete({ ...response.data }));
        })
        .catch(error => {
          // dispatch(addFailed(error))
          console.log(error);
        }));
};

const editBookTime = (id, clock_in, clock_out, description) => dispatch => {
    //dispatch(addInit())
    return Promise.resolve(axios
        .post(`/put_book_time?book_time_id=${id}&clock_in=${clock_in}&clock_out=${clock_out}&description=${description}`)
        .then(response => {
            dispatch(fetchListComplete(response.data.bookTimeData));          
        })
        .catch(error => {
          // dispatch(addFailed(error))
          console.log(error);
        }));
};

const deleteBookTime = book_time_id => dispatch => {
  //dispatch(addInit())
  return Promise.resolve(
    axios
        .delete(`/delete_book_time?book_time_id=${book_time_id}`)
        .then(response => {                                    
            dispatch(fetchListComplete(response.data.bookTimeData));            
        })
        .catch(error => {
            // dispatch(addFailed(error))
            console.log(error);
        })
  );
};

const searchBookTime = (bookTimeRecords, clockIn, clockOut, duration, description) => dispatch => {
    let filteredBookTimeRecords = _.cloneDeep(bookTimeRecords);
    if (!_.isNull(clockIn)) {        
        console.log('clockIn');
        
        filteredBookTimeRecords = matchSorter(
          filteredBookTimeRecords,
          moment(clockIn).format("YYYY/MM/DD"),
          {
            keys: ["clock_in"],
            threshold: matchSorter.rankings.CONTAINS
          }
        );      
    }
    
    if (!_.isNull(clockOut)) {
        filteredBookTimeRecords = matchSorter(
          filteredBookTimeRecords,
          moment(clockOut).format("YYYY/MM/DD"),
          {
            keys: ["clock_out"],
            threshold: matchSorter.rankings.CONTAINS
          }
        );    
    }

    if ( !_.isEqual(duration, new Date("1995 01 01 00:00:00")) ) {
        filteredBookTimeRecords = matchSorter(
          filteredBookTimeRecords,
          moment(duration).format("HH:mm:ss"),
          {
            keys: ["duration"],
            threshold: matchSorter.rankings.CONTAINS
          }
        );  
    }
 
    if (description !== "") {
        filteredBookTimeRecords = matchSorter(
          filteredBookTimeRecords,
          description,
          {
            keys: ["description"],
            threshold: matchSorter.rankings.CONTAINS
          }
        );
    }
    dispatch(searchListComplete(filteredBookTimeRecords));
}

export {
  initTime,
  updateTime,
  bookTime,
  fetchList,
  searchBookTime,
  deleteBookTime,
  editBookTime
};
