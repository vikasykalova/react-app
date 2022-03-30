import React from 'react'
import ToDoList from './Todo/ToDoList'

function App() {
  let todos = [
    { id: 1, completed: false, title: 'купить булку' },
    { id: 2, completed: false, title: 'купить сыр' },
    { id: 3, completed: false, title: 'купить яблоки' },
  ]

  function toggleTodo(id) {
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  }

  return (
  <div className="wrapper">
    <h1>React tutorial</h1>

    <ToDoList todos={todos} onToggle={toggleTodo}/> {/* передаем свойство */}
  </div>)
}

export default App;
