export const initTodo = todos => {
  return {
    type: 'INIT_TODO',
    todos
  }
}

export const addTodo = text => {
  return {
    type: 'ADD_TODO',
    text
  }
}

export const removeTodo = index => {
  return {
    type: 'REMOVE_TODO',
    index
  }
}

export const toggleTodo = index => {
  return {
    type: 'TOGGLE_TODO',
    index
  }
}
