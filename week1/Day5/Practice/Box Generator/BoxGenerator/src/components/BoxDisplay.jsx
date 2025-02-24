import React from "react";

const BoxDisplay = (props) => {
    return (
        <div style={{display: "flex", flexWrap: "wrap", gap: "10px", margin: "20px"}}>
            {props.boxes.map((color, i) => (
                <div key={i} style={{
                    backgroundColor: color,
                    width: "100px",
                    height: "100px",
                }}   
                ></div>
            ))}
        </div>
    );
};
export default BoxDisplay;