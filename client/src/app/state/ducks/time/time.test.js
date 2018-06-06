import reducer from './reducers';
import * as actionTypes from './types';

describe('timer reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      timer: null,
      counter: 0,
      loading: false,
      didSearch: false
    })
  })

  it('should store book time records after fetching from the server', () => {
    expect(reducer({
        error: false,
        loading: false,
        didSearch: false,
        counter: 0
      },
      {
        type: actionTypes.FETCH_LIST_COMPLETED,
        payload: {
          bookTimeRecords: []
        }
      })
    ).toEqual({
      error: false,
      loading: false,
      didSearch: false,
      counter: 0,
      bookTimeRecords: []
    })
  })
})