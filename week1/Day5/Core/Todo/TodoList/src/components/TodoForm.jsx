import React, {useState} from "react";
const TodoForm = ({addTodo}) => {
    const [text, setText] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText("");
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)}></input>
            <button type="submit">Add Task</button>
        </form>
    );
};
export default TodoForm;