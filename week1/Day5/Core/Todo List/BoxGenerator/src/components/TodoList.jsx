const TodoList = (props) => {
  const { todos, deleteTodo, toggleTodo } = props;

  return (
    <ul>
        {todos.map((todo, index) => (
            <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(index)} />
                {todo.task}
                <button onClick={() => deleteTodo(index)}>Delete</button>
        </li>
    ))}
    </ul>
);
}

export default TodoList;
