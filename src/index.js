import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import "milligram";
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import WebFont from "webfontloader";

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route path="/" component={App} />
    </React.StrictMode>,
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
