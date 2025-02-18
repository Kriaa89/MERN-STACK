import React, {useState} from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
function App () {
  const [todos, setTodos]  = useState([]);
  const addTodo = (text) => {
    const newTodo = {text, completed: false };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const removeTodo = (index) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.index !== index));
  };
  const toggleTodo =(index) => {
    setTodos(prevTodos => prevTodos.map(todo  => {
      if (todo.index === index) {
        return { ...todo, completed: !todo.completed};
      }
      return todo;
    })
  );
  };
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodo={toggleTodo}></TodoList>
    </div>
  );
};
export default App;