//import * as types from './types';
import { createReducer } from '../../utils';
//import { updateObject } from '../../../utilities';

/* State time 
{
    currentTimeHour: "00",
    currentTimeMinute: "00",
    currentTimeSecond: "00",
    currentTimeState: "am",
    counter: 0
};
*/

/* const bookTimeCompleted = (state, action) => {
    return (state.booTime)
        ? updateObject(state, { books: state.books.concat(action.payload.book), error: false, loading: false, })
        : updateObject(state, { error: false, loading: false, })
} */

const timeReducer = createReducer([])({
    /* [types.ADD_COMPLETED]: (state, action) => bookTimeCompleted(state, action), */
    /* [types.SET_REDIRECT]: (state, action) => updateObject(state, { redirectUrl: action.payload.url }), */
})

export default timeReducer;