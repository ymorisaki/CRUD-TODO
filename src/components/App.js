import React, { createContext } from 'react';
import Form from './Form'
import TodoList from './TodoList'

export const DispatchContext = createContext()

const AppConponent = ({ todos, dispatch }) => {

  return (
    <div className="todo-wrap">
      <DispatchContext.Provider value={dispatch}>
        <TodoList todos={todos} />
        <Form />
      </DispatchContext.Provider>
    </div>
  )
}

export default AppConponent;
