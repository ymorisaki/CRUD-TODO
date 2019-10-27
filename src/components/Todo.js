import React, { useContext } from 'react';

import { removeTodo } from '../actions/actions'
import { DispatchContext } from '../App'

const Todo = ({ todo, index }) => {
  const dispatch = useContext(DispatchContext)

  return (
    <li>
      { todo.text }
      <ul className="button-list">
        <li>
          <button type="button">達成する</button>
          <button type="button" onClick={() => dispatch(removeTodo(index))}>削除する</button>
        </li>
      </ul>
    </li>
  )
}

export default Todo;
