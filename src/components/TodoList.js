import React from 'react'
import Todo from './Todo'

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo, index) => (
        <Todo index={index} key={index} todo={todo} />
      ))}
    </ul>
  )
}

export default TodoList