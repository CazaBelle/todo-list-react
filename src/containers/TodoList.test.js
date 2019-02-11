import React from 'react';
import { render } from 'react-testing-library';
import TodoList from './TodoList';

describe('TodoList', () =>{
  const props = { header: 'Todo List', todos: [] }
  
  it('renders the TodoList', () => {
    const { queryByText } = render(< TodoList {...props} />)
    const header = queryByText('Todo List')
    expect(header.innerHTML).toBe('Todo List')
  })

  //checking the number of todos passed into the TodoList
  it('renders the todo list', () => {
    const { container } = render(< TodoList {...props} />)
    const todoNodes = container.querySelectorAll('.Todo')
    expect(todoNodes.length).toBe(props.todos.length)
  })

  it('renders the todo list with some entries', () =>{
    let todos = [
      {
        author: 'Carol',
        text: 'Get some milk'
      },
      {
        author: 'Doug',
        text: 'Walk the Dog'
      }
    ]
    const { container } = render(< TodoList {...props} />)
    const todoNodes = container.querySelectorAll('.Todo')
    expect(todoNodes.length).toBe(props.todos.length)

  })
})
