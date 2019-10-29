import React, {
  useContext
} from 'react';

import { removeTodo, toggleTodo } from '../actions/actions'
import { DispatchContext } from '../App'

const Todo = ({ todo, index }) => {
  const dispatch = useContext(DispatchContext)

  return (
    <li>
      <p style={{textDecoration: todo.isComplete ? 'line-through' : 'none'}}>{ todo.text }</p>
      <ul className="button-list">
        <li>
          <button type="button" onClick={() => dispatch(toggleTodo(index))}>達成する</button>
          <button type="button" onClick={() => dispatch(removeTodo(index))}>削除する</button>
        </li>
      </ul>
    </li>
  )
}

export default Todo;
