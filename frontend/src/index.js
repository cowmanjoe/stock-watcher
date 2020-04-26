import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import Results from "./components/Results";
import './index.css';
import * as serviceWorker from './serviceWorker';
import SellerForm from './components/SellerForm';
import SellerReportForm from './components/SellerReportForm.jsx';
import SellerInfo from './components/SellerInfo';
import Navbar from "./components/Navbar";
<<<<<<< HEAD
import SearchSellers from "./components/SearchSellers";
import SellerResults from "./components/SellerResults";

=======
import SellerFocus from './components/SellerFocus';
>>>>>>> bb14b96e4cae4d3fcb64af2c60b419d0c8930eee
let value = 1;

const App = (
  <div style={{ fontFamily: "Roboto" }}>
    <Router>
      <Navbar value={value} />

      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/results/:item" component={Results} />
        <Route exact path="/sellers" component={SellerInfo} />
        <Route exact path="/sellers/:id" component={SellerFocus} />
        <Route exact path="/sellers/new" component={SellerForm} />
        <Route exact path="/sellers/report" component={SellerReportForm} />
        <Route exact path="/search_sellers" component={SearchSellers}/>
        <Route exact path="/search_sellers/results/:item" component={SellerResults}/>
      </div>
    </Router>
  </div>
);

ReactDOM.render(App, document.getElementById("root"));
serviceWorker.unregister();