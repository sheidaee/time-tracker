import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";

import App from "./app/views";
import configureStore from "./app/state/store";

import registerServiceWorker from "./registerServiceWorker";
const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

const RootHtml = (  
  <ReduxProvider store={reduxStore}>
    <Router>
      <App />
    </Router>  
  </ReduxProvider>
);

ReactDOM.render(RootHtml, document.getElementById("root"));

registerServiceWorker();
