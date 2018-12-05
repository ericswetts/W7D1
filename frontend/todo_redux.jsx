import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';


document.addEventListener("DOMContentLoaded", function(){
  const store = configureStore();
  window.store = store;
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root store={store}/>, document.getElementById('content'));

});
