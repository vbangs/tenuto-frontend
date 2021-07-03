import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import '../node_modules/bulma/css/bulma.min.css';

ReactDOM.render(
  <Router>
    <React.StrictMode>
      <Route path="/" component={App} />
    </React.StrictMode>,
  </Router>,
  document.getElementById('root')
);

reportWebVitals();
