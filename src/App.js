import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"; 
import Home from "./components/Home.js";
import { pokemonApi1 } from "./services/api1.js";
import Nav from "./components/Nav.js";
import Pokemon from "./components/Pokemon.js";
import PokemonInfo from "./components/PokemonInfo.js";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    pokemonApi1().then((result) => setData(result));
  }, []);

  const testing = data.data?.[0].id

  // console.log(data);
  console.log(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${testing}.png`
  );

  return (
    <>
      <Nav />
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemon/:id" element={<Pokemon />} />
        <Route path="pokemon/:id/:info" element={<PokemonInfo />}/>
      </Routes>
    </>
  );


}

export default App;
