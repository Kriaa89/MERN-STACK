import { useState } from 'react';

const ReactUser = (props) => {
    const { firstName, lastName, hairColor, initialAge } = props;
    const [age, setAge ] = useState(initialAge);
    const handleClick = () => {
        setAge(prevAge => prevAge + 1);
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
