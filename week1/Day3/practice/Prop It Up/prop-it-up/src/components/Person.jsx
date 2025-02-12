const Person = (props) => {
    const { firstName, lastName, age, hairColor} = props
    return (
        <div className="app">
            <h2>{lastName}, {firstName}</h2>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>
    );
}
export default Person;