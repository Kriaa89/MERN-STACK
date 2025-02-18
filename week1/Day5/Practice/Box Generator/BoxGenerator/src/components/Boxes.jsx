import React, { useState } from 'react';

const Boxes = ({ addBox }) => {
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
    e.preventDefault();
    addBox(color);
    // Clear the input field after submission.
    setColor('');
    };

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="color">Enter Box Color:</label>
        <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)}/>
        <button type="submit">Add Box</button>
    </form>
);
};

export default Boxes;