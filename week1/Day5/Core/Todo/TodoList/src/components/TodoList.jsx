import React from "react";

const TodoList = ({ todos, removeTodo, toggleTodo}) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li
                    key={todo.index} style={{ textDecoration: todo.completed ? "line-through" : " none"}}>
                    <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.index)} />
                    {todo.text}
                    <button onClick={() => removeTodo(todo.index )}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
export default TodoList;