import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './store/store';
import {receiveTodo, receiveTodos} from './actions/todo_actions';


document.addEventListener("DOMContentLoaded", function(){
  window.store = configureStore();
  window.receiveTodo = receiveTodo;
  window.receiveTodos = receiveTodos;
  ReactDOM.render(<Root />, document.getElementById('content'));
});