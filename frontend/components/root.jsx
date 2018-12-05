import React from 'react';
import { Provider } from 'react-redux';
import App from './app';
import configureStore from '../store/store';

// const store = configureStore();

const Root = (props) => (
  <Provider store={ props.store }>
  <App banana={'yummy'}/>
  </Provider>
);

export default Root;
