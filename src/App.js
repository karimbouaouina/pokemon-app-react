import React from 'react';
import './App.css';
import Pokedex from './components/Pokedex';
import Footer from './components/Footer';
import CatalogPokedex from './components/CatalogPokedex';
import Opening from './components/opening';
import { useEffect, useState } from 'react';
import pokemonlogo from "../src/pokemon_logo.png";

function App() {
  const [opening, setAnimation] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setAnimation(false)
    },2150)
  },[])
  return (
    <div className="App">
              {
          opening ? 

        <Opening/>:

<>        
      <header className="App-header">
      <h1 className='App-logo'>
        <img src = {pokemonlogo} alt = "Pokemon Logo" width = "55%"  />
      </h1>
      </header>
      <div className="Introduction">
        <div className="introduction-text">
          <h2>Welcome to the World of Pokemon!</h2>
          <p>
            Catch 'em all and become a Pokemon Master.
          </p>
        </div>
        <img src='./professor-oak.png' alt='professor-oak' className='professor-oak'></img>
      </div>
      <div className="App-content">
        <div className="Introduction">
        <div className="introduction-text">
        <h2>This is a Pokedex!</h2>
        <p>
          It gives information about all Pokémon in the world that are contained in its database
        </p>
        </div>
        </div>
        <CatalogPokedex />
        <div className="introduction-text">
        <h2>This is your team!</h2>
        <p>
          It is composed out of 6 total pokemons, which you will have to catch by yourself. But be careful, some of them are hard to do so.
        </p>
        </div>
        <Pokedex />
        <Footer />
      </div>
      </>
}
    </div>
  );
}

export default App;
