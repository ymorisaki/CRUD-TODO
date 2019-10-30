import { jsonUrl } from './index'
import React, {
  useReducer,
  createContext,
  useEffect
} from 'react';
import { reducer } from './reducer/reducer'
import Form from './components/Form'
import TodoList from './components/TodoList'

export const DispatchContext = createContext()

const App = initTodo => {
  const [todos, dispatch] = useReducer(reducer, initTodo.initTodo.TODOS)
  console.log(initTodo)

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
    <div className="todo-wrap">
      <DispatchContext.Provider value={dispatch}>
        <TodoList todos={todos} />
        <Form  />
      </DispatchContext.Provider>
    </div>
  )
}

export default App;
