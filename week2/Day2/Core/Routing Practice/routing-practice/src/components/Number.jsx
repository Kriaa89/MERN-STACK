import React from "react";
import { useParams} from "react-router-dom";

const Number = () => {
    const { id } = useParams();
    
    return (
        <div>
            {
                isNaN(+id) 
                    ? <h1>The word is: {id}</h1> // if true 
                    : <h1> The Number is:  {id}</h1> // iff false
            }
        </div>
    );
}
export default Number;