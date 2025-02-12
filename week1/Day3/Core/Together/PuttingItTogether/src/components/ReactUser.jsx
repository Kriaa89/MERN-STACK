import { useState } from 'react';

const ReactUser = (props) => {
    const { firstName, lastName, hairColor } = props;
    const [age, setAge ] = useState(0);
    const handleClick = () => {
        setAge(age + 1);
    };
    return (
        <div className='react-user'>
            <h2>{firstName}, {lastName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
            <button onClick={handleClick}>Birthday Button {firstName}</button>
        </div>
    );
}

export default ReactUser;
