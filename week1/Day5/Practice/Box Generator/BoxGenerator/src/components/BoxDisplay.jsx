import React from 'react';

const BoxDisplay = ({ boxes }) => {
  return (
    // Use flex layout to have boxes wrap side by side.
    <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '20px' }}>
      {boxes.map((box) => (
        // Each box is rendered as a div with inline styling.
        <div 
          key={box.index}
          style={{
            backgroundColor: box.color, // Dynamically set by the user input.
            width: '100px',
            height: '100px',
            margin: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            border: '1px solid #000'
          }}
        >
          {box.color}
        </div>
      ))}
    </div>
  );
};

export default BoxDisplay;