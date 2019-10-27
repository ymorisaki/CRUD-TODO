export const reducer = (todos, action) => {
  switch(action.type) {
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
    default:
      return todos
  }
}
