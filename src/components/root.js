import React from 'react';
import { Provider } from 'react-redux';
import App from './app/App';
import { Router, Route, browserHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);

export default Root;
