import React, {
  useReducer,
  createContext,
  useEffect,
  useRef
} from 'react';
import { reducer } from './reducer/reducer'
import { initTodo } from './actions/actions'
import Form from './components/Form'
import TodoList from './components/TodoList'

export const DispatchContext = createContext()

/**
 * カスタムフック（useRef, useEffect）
 * @param {Array} todos TODOリストObjectを列挙する配列
 * @param {Function} dispatch 更新されたTODOリストをアップデートする関数
 */
const useRender = (todos, dispatch) => {
  const jsonUri = 'https://api.myjson.com/bins/1e8uds'
  const isFirstRender = useRef(true)

  useEffect(() => {
    const newTodos = {
      TODOS: [...todos]
    }

    // 初回レンダリング後の処理
    if (isFirstRender.current) {
      fetch(jsonUri)
      .then(response => {
        return response.json()
      })
      .then(init => {
        newTodos.TODOS = [init.TODOS]
        dispatch(initTodo(init.TODOS))
        isFirstRender.current = false
        return
      })
    }

    // ２回目以降のレンダリング後の処理
    fetch(jsonUri, {
      method: 'PUT',
      body: JSON.stringify(newTodos),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  })
}

const App = () => {
  const [todos, dispatch] = useReducer(reducer, [])

  useRender(todos, dispatch)

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
