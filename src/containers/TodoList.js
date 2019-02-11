import React, { Component } from 'react';
import Todo from '../components/Todo'

export default class TodoList extends Component {
  render(){
    const { header } = this.props
    return (
    <div>
      <h1>{ header }</h1>
    </div>
    )
  }
}