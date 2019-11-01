import React, {
  useReducer,
  useEffect,
  useRef
} from 'react';
import AppConponent from '../components/App'
import { reducer } from '../reducer/reducer'
import { initTodo } from '../actions/actions'

/**
 * カスタムフック（useReducer, useRef, useEffect）
 * @param {Array} todos TODOリストObjectを列挙する配列
 * @param {Function} dispatch 更新されたTODOリストをアップデートする関数
 * @returns {Array} [todos]現在のTODOリスト, [dispatch]actionCreaterをReducerへ渡す関数
 */
const useRender = () => {
  const [todos, dispatch] = useReducer(reducer, [])
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
  }, [todos])

  return [todos, dispatch]
}

const AppContainer = () => {
  const [todos, dispatch] = useRender()

  return (
    <AppConponent todos={todos} dispatch={dispatch} />
  )
}

export default AppContainer;
