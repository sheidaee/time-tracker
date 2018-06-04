import * as types from './types';
import { createReducer } from '../../utils';
import { updateObject } from '../../../utilities';


/* State time 
{
    currentTimeHour: "00",
    currentTimeMinute: "00",
    currentTimeSecond: "00",
    currentTimeState: "am",
    counter: 0
};
*/

const initialState = {
    timer: null,
    counter: 0,
    loading: false,
    didSearch: false
}

const bookTimeCompleted = (state, action) => {
    return state.bookTimeRecords ? updateObject(state, {
          bookTimeRecords: [action.payload.bookTimeInfo].concat(
            state.bookTimeRecords
          ),
          error: false,
          loading: false,
          didSearch: false,
          counter: 0
        }) : updateObject(state, { error: false, loading: false, didSearch: false, counter: 0 });
}

const timeReducer = createReducer(initialState)({
  [types.INIT_TIME]: (state, action) =>
    updateObject(state, { timer: action.payload.timer }),
  [types.UPDATE_TIME]: (state, action) =>
    updateObject(state, { counter: action.payload.counter }),

  [types.FETCH_INIT]: (state, action) =>
    updateObject(state, { loading: action.payload.loading }),
  [types.FETCH_LIST_COMPLETED]: (state, action) =>
    updateObject(state, {
      bookTimeRecords: action.payload.bookTimeRecords,
      error          : false,
      loading        : false,
      didSearch      : false
    }),

  [types.BOOK_TIME_COMPLETED]: (state, action) =>
    bookTimeCompleted(state, action),

  [types.SEARCH_LIST_COMPLETED]: (state, action) =>
    updateObject(state, {
      searchedBookTimeRecords: action.payload.bookTimeRecords,
      error                  : false,
      loading                : false,
      didSearch              : true      
    })
});

export default timeReducer;