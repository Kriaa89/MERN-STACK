import { useState } from "react";
import BoxForm from "./components/BoxForm";
import BoxDisplay from "./components/BoxDisplay";


function App() {
    const [boxes, setBoxes] = useState([]);
    const createBox = (color) => {
        setBoxes([...boxes, color]);
    };
    return (
        <div>
            <BoxForm onNewBox={createBox}></BoxForm>
            <BoxDisplay boxes={boxes}></BoxDisplay>
        </div>
    );
}
export default App;