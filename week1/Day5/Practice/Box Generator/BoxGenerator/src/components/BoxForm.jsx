import { useState } from "react";
const BoxForm = (props) => {
    const [color, setColor] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        props.onNewBox(color);
        setColor("");
    }
    return (
        <form onSubmit={ handleSubmit }>
            <div>
                <label>Color:</label>
                <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
                <button type="submit">Add</button>
            </div>
        </form>
    );
}
export default BoxForm;