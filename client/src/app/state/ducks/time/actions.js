import * as types from './types';

export const fetchInit = () => ({
    type: types.FETCH_INIT,
    payload: {
        loading: true
    }
})

export const fetchListComplete = (bookTimeRecords) => ({
    type: types.FETCH_LIST_COMPLETED,
    payload: {
        bookTimeRecords
    }
});

export const initTime = (timer) => ({
    type: types.INIT_TIME,
    payload: {
        timer
    }
});

export const updateTime = (timer) => ({
    type: types.UPDATE_TIME,
    payload: {
        counter: timer + 1
    }
});

export const bookTimeComplete = bookTimeInfo => ({
  type: types.BOOK_TIME_COMPLETED,
  payload: {
    bookTimeInfo
  }
});

export const searchListComplete = (bookTimeRecords) => ({
    type: types.SEARCH_LIST_COMPLETED,
    payload: {
        bookTimeRecords
    }
});