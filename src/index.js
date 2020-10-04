import "regenerator-runtime/runtime";
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const app = (
  <Provider
     store={store}
  >
    <BrowserRouter>
      <App/>
    </BrowserRouter>
  </Provider>
);

const wrapper = document.getElementById('app');
wrapper ? ReactDOM.render(app, wrapper) : false;
