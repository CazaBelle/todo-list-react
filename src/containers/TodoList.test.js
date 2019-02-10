import React from 'react';
import { render, queryByText } from 'react-testing-library';

import TodoList from './TodoList';

describe('TodoList', () =>{
  const props = { header: 'Todo List', todos: [] }
  
  it('renders the TodoList', () => {
    const { queryByText } = render(< TodoList {...props} />)
    const header = queryByText('Todo List')
    expect(header.innerHTML).toBe('Todo List')
  })
})
