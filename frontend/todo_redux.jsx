import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './store/store';



document.addEventListener("DOMContentLoaded", function(){
  window.store = configureStore();
  ReactDOM.render(<Root/>, document.getElementById('content'));
});