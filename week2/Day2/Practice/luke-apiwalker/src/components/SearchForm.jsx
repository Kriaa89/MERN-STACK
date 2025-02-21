import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
    const [resource, setResource ] = useState('people');
    const [id , setId] = useState('')
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/${resource}/${id}`);
    };
    return  (
        <form onSubmit={handleSubmit}>
            <select value={resource} onChange={e => setResource(e.target.value)}>
                <option value="people">People</option>
                <option value="planets">Planets</option>
            </select>
            <input type="number" value={id} onChange={e => setId(e.target.value)}/>
            <button type="submit">Search</button>
        </form>
    );
};
export default SearchForm;