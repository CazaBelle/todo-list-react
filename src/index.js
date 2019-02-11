import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './containers/TodoList';
//import * as serviceWorker from './serviceWorker';
const todos = [
  {
  author: 'Doug',
  text: 'Walk the Dog',
  }, 
  {
    author: 'Carol',
    text: 'Do the dishes'
  }
]
ReactDOM.render(<TodoList todos={todos} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

