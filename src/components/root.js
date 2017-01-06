import React from 'react';
import { Provider } from 'react-redux';
import App from './app/App';
import ShowItem from './showItem/ShowItem';
import EditItem from './editItem/editItem';
import { Router, Route, browserHistory } from 'react-router';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path='/' component={App} />
      <Route path='/:id' component={ShowItem} />
      <Route path='/edit/:id' component={EditItem} />
    </Router>
  </Provider>
);

export default Root;
