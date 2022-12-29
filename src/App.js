import { Routes, Route } from "react-router-dom";
// import {useState, useEffect} from "react"; 
// import { pokemonApi1 } from "./services/api1.js";
import index from "./index.css"

import Home from "./components/home.js";
import Nav from "./components/Nav.js";
import PokemonInfo from "./components/PokemonInfo.js";
import About from "./components/About.js";
import Arena from "./components/Arena.js";
import Pokemon2 from "./components/pokemon2.js";

function App() {
  // const [data, setData] = useState({});

  // useEffect(() => {
  //   pokemonApi1().then((result) => setData(result));
  // }, []);

  // const testing = data.data?.[0].id

  // console.log(data);
  // console.log(
  //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${testing}.png`
  // );

  // console.log( data.status);

  return (
    <>
      <Nav ></Nav>
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemon/:id" element={<Pokemon2 />} />
        <Route path="pokemon/:id/:info" element={<PokemonInfo />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/arena" element={<Arena />}/>
      </Routes>
    </>
  );


}

export default App;
