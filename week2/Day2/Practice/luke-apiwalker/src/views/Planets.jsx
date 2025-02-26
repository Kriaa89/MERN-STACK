import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import axios from "axios";

const Planets = () => {
    const { id } = useParams();
    const [planet, setPlanet] = useState(null);
    const [ error, setError] = useState(false);
    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/' + id)
        .then(response => {
            setPlanet(response.data);
            setError(false);
        })
        .catch(() => setError(true));
    }, [id]);
    if (error) {
        return (
            <div>
                <h2>These aren't the droids you're looking for</h2>
            </div>
        );
    }
    return planet && (
        <div>
            <h2>{planet.name}</h2>
            <p>climate: {planet.climate}</p>
            <p>Terrain: {planet.terrain}</p>
            <p>Surface water: {planet.surface_water}</p>
            <p>Population: {planet.population}</p>
        </div>
    );
};
export default Planets;