import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";
import './index.css';
import * as serviceWorker from './serviceWorker';

const App = (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/:item" component={Results} />
    </div>
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
