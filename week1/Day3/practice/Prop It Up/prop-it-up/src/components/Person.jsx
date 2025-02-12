const Person = (props) => {
    const { firstName, lastName, age, hairColor} = props
    return (
        <div className="person">
            <h2>{lastName}, {firstName}</h2>
            <p>{age}</p>
            <p>{hairColor}</p>
        </div>
    )
}