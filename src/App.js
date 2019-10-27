import { jsonUrl } from './index'
import React, {
  useReducer,
  createContext,
  useEffect
} from 'react';
import { reducer } from './reducer/reducer'

import Todo from './components/Todo'
import Form from './components/Form'

export const DispatchContext = createContext(() => {})

const App = initTodo => {
  const [todos, dispatch] = useReducer(reducer, initTodo.initTodo.TODOS)

  useEffect(() => {
    const newTodos = {
      TODOS: [...todos]
    }
  
    fetch(jsonUrl, {
      method: 'PUT',
      body: JSON.stringify(newTodos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  }, [todos])

  return (
    <>
      <DispatchContext.Provider value={dispatch}>
        <ul className="todo-list">
          {todos.map((todo, index) => (
            <Todo index={index} key={index} todo={todo} />
          ))}
        </ul>
        <Form  />
      </DispatchContext.Provider>
    </>
  )
}

export default App;
