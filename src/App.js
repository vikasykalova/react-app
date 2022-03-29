import React from 'react'
import ToDoList from './Todo/ToDoList'

function App() {
  const todos = [
    { id: 1, completed: false, title: 'купить булку' },
    { id: 2, completed: false, title: 'купить сыр' },
    { id: 3, completed: false, title: 'купить яблоки' },
  ]

  return (
  <div className="wrapper">
    <h1>React tutorial</h1>

    <ToDoList todos={todos} key={todo.id}/> {/* передаем свойство */}
  </div>)
}

export default App;
