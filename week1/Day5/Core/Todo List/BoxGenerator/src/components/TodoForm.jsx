import { useState } from "react";
const TodoForm = (props) => {
    const {addTodo} = props;
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(task.trim()) {
            addTodo({ id: Date.now(), task, completed: false});
                setTask("");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} placeholder="Add A New task"/>
            <button type="submit">Add</button>
        </form>
    );
}
export default TodoForm;