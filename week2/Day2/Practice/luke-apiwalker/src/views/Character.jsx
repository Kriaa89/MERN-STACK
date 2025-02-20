import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Character = () => {
    const { id } = useParams();
    const [ character, setCharacter ] = useState(null);
    const [ error, setError ] = useState(false);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const response = await axios.get('https://swapi.dev/api/people/: id');
                setCharacter(response.data);
                setError(false);
            } catch (error) {
                console.error(error)
                setError(true);
            }
        };
        fetchCharacter();
    }, [id]);
    if (error) {
        return (
            <div>
                <h2>These aren't the droids you're looking for</h2>
                <img src="obi-wan.jpg" alt="Obi-Wan Kenobi"/>
            </div>
        );
    }
    return (
        <div>
            <h1>{character.name}</h1>
            <p>Height: {character.height}</p>
            <p>Mass: {character.mass}</p>
            <p>Hair Color: {character.hair_color}</p>
            <p>Skin Color: {character.skin_color}</p>

        </div>
    );
};
export default Character;