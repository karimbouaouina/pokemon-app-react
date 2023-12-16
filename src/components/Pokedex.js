import '../css/Pokedex.css';
import React, { useEffect, useState } from 'react';
import Pokecard from './Pokecard';
import axios from 'axios';

const Pokedex = () => {
  const [randomPokemonData, setRandomPokemonData] = useState([]);

  useEffect(() => {
    getRandomPokemon();
  }, []);

  const getRandomPokemon = async () => {
    try {
      const randomPokemonIds = generateRandomPokemonIds(6);
      const responses = await Promise.all(
        randomPokemonIds.map((id) => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`))
      );
      const randomPokemons = responses.map((response) => response.data);
      setRandomPokemonData(randomPokemons);
    } catch (error) {
      console.error('Error fetching Pokémon data:', error);
    }
  };

  const generateRandomPokemonIds = (count) => {
    const maxPokemonId = 898;
    const randomIds = new Set();

    while (randomIds.size < count) {
      const randomId = Math.floor(Math.random() * maxPokemonId) + 1;
      randomIds.add(randomId);
    }

    return Array.from(randomIds);
  };

  return (
    <div className="Pokedex">
        <div className="Pokedex-Title">
          <h1>Poketeam</h1>
        </div>
        <div className="generate-btn"><button className="btn" onClick={getRandomPokemon}>Generate a new team</button></div>
        <div className="Pokedex-Card">
            {randomPokemonData.map((pokemon) => (
            <Pokecard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                type={pokemon.types[0].type.name}
                exp={pokemon.base_experience} 
            />
            ))}
        </div>
        </div>
    );
}

export default Pokedex;
