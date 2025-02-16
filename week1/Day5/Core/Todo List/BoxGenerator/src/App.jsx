import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = ()

}