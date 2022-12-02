import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"; 
import Home from "./components/home.js";
import { pokemonApi1 } from "./services/api1.js";
import Pokemon from "./components/pokemon.js";
import PokemonInfo from "./components/pokemonInfo.js";

function App() {
  

  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemon/:id" element={< Pokemon/>} />
        <Route path="pokemon/:id/:info" element={< PokemonInfo/>}/>
      </Routes>
    </>
  );

  function newFunction() {}
}

export default App;
