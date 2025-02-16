const TodoList = (props) => {
    const { todos, deleteTodo, toggleTodo} = props;
    return (
        <ul>
            {todos.map(todo => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through': 'none'}}>
                    <input type="checkbox" checked={todo.completed}  onChange={() => toggleTodo(todo.id)}/>
                    {todo.task}
                    <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default TodoList;
