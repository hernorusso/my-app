import React from 'react';
import { render } from 'react-dom';
import App from './components/app/App';
import './index.css';
import configureStore from './configureStore';
import { Provider } from 'react-redux';

const store = configureStore();

render.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
