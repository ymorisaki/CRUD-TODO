export const reducer = (todos, action) => {
  switch(action.type) {
    case 'INIT_TODO':
      return action.todos
    case 'ADD_TODO':
      return [...todos, {
        text: action.text,
        isComplete: false
      }]
    case 'REMOVE_TODO':
      const newTodos = []
      for (let i = 0; i < todos.length; i++) {
        if (action.index !== i) {
          newTodos.push(todos[i])
        }
      }
      return newTodos
    case 'TOGGLE_TODO':
      return todos.map((todo, index) => {
        if (action.index === index) {
          return Object.assign({}, todo, {
            isComplete: !todo.isComplete
          })
        }
        return todo
      })
    default:
      return [...todos]
  }
}
