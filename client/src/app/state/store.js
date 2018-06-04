import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';
import { reducer as form } from "redux-form";

import { createLogger } from "./middleware";
import app from "./ducks";

export default function configureStore(initialState) {
  const rootReducer = combineReducers({ app, form });

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(    
        thunkMiddleware,    
        createLogger(false),
      ),
    )
  );
}