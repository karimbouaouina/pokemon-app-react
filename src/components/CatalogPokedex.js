import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Pokecard from './Pokecard';
import '../css/CatalogPokedex.css';

const CatalogPokedex = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      return;
    }

    const fetchPokemonData = async () => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${searchTerm.toLowerCase()}`);
        setSearchResults([response.data]);
      } catch (error) {
        setSearchResults([]);
        console.error('Error fetching Pokémon data:', error);
      }
    };

    const debounceTimeout = setTimeout(fetchPokemonData, 500);
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm]);

  return (
    <div className="CatalogPokedex">
      <h1 className="CatalogPokedex-title">Pokedex</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Pokemon..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="CatalogPokedex-Card">
        {searchResults.map((pokemon) => (
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
};



export default CatalogPokedex;
