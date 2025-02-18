import React, { useState } from 'react';
import Boxes from './components/Boxes';
import BoxDisplay from './components/BoxDisplay';

function App() {
    const [boxes, setBoxes] = useState([]);

    const addBox = (color) => {
    // Create a new box object.
    const newBox = { color };
    // Update state by appending the new box object.
    setBoxes(prevBoxes => [...prevBoxes, newBox]);
};

    return (
    <div className="App">
        <h1>Box Generator</h1>
        <Boxes addBox={addBox} />
        <BoxDisplay boxes={boxes} />
    </div>
    );
}

export default App;