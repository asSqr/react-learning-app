import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import Layout from './Layout.js';
import Tes1 from './Tes1.js';
import Tes2 from './Tes2.js';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Router>
    <Layout>
      <Route exact path="/" component={App}></Route>
      <Route path="/tes1" component={Tes1}></Route>
      <Route path="/tes2" component={Tes2}></Route>
    </Layout>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
