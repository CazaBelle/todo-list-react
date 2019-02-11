import React, { Component } from 'react';
import Todo from '../components/Todo'

export default class TodoList extends Component {
  renderTodos(){
    return this.props.todos.map((todo, i) => (
      <Todo key={i} {...todo}/>
    ))
  }

  render() {
    const { header } = this.props
    return (
    <div className="TodoList">
      <h1>{ header }</h1>
      <div className="todo-list">
        {this.renderTodos()}
      </div>
    </div>
    )
  }
}