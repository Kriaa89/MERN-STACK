import React from "react";
import { useParams} from "react-router-dom"; 

const WordColor = () => {
    const { word, textColor, bgColor }  = useParams();
    return (
        <h1 style={{ color: textColor, backgroundColor: bgColor}}>
            The word is: {word}
        </h1>
    )
}