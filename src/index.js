import React from 'react';
import { render } from 'react-dom';
import './index.css';
import configureStore from './configureStore';
import Root from './components/root';

const store = configureStore();
console.log(store.getState());

render(
  <Root store={store}/>,
  document.getElementById('root')
);
