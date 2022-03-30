import React from 'react'
import TodoList from './Todo/ToDoList'

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, completed: true, title: 'купить булку' },
    { id: 2, completed: false, title: 'купить сыр' },
    { id: 3, completed: false, title: 'купить яблоки' }
  ])
  

  function toggleTodo(id) {
    setTodos(todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
      })
    )
  }

  return (
  <div className="wrapper">
    <h1>React tutorial</h1>

    <TodoList todos={todos} onToggle={toggleTodo}/> {/* передаем свойство */}
  </div>)
}

export default App;
