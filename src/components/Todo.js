import React from 'react'

const Todo = props => {
  return (
    <div className="Todo">
      <h4>{props.author}</h4>
      <p>{props.text}</p>
    </div>
  )
}

export default Todo