import React from 'react'
import TodoList from './Todo/ToDoList'
import Context from './context'

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

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <Context.Provider value={{removeTodo }}>
      <div className="wrapper">
        <h1>React tutorial</h1>

        <TodoList todos={todos} onToggle={toggleTodo}/> {/* передаем свойство */}
      </div>
      
  </Context.Provider>
  )
}


export default App;
