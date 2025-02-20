import React, { useEffect, useState } from "react";
import axios from "axios";

const PokemonList = () => {
    const [pokemon, setPokemon] = useState([]);
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            setPokemon(response.data.results);
        })
        .catch(err => {
            console.log(err);
        })
    });
    return (
        <div>
            <h1>Pokemon List</h1>
            <ul>
                {pokemon.map((name, index) => (
                    <li key={index}>{name}</li>
                ))}
            </ul>
        </div>
    );
};
export default PokemonList;

