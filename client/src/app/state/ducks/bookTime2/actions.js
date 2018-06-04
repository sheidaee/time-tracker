import * as types from './types';

export const bookTimeComplete = (bookTimeInfo) => ({
    type: types.BOOK_TIME_COMPLETED,
    payload: {
        bookTimeInfo
    }
});