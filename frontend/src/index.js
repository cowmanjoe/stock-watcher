import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";
import './index.css';
import * as serviceWorker from './serviceWorker';
import SellerForm from './components/SellerForm';
import Navbar from "./components/Navbar";
let value = 0;

const App = (
  <Router>
    <Navbar value={value} changeValue={(num) => value = num} />

    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/results/:item" component={Results} />
      <Route exact path="/sellers" component={SellerForm} />
    </div>
  </Router>
);

ReactDOM.render(App, document.getElementById("root"));
serviceWorker.unregister();