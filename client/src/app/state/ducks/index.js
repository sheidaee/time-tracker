import { combineReducers } from "redux";
import timeReducer from "./time";

const rootReducer = combineReducers({ time: timeReducer });

export default rootReducer;
