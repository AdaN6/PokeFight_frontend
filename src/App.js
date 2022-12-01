import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"; 
import Home from "./components/home.js";
import { pokemonApi1 } from "./services/api1.js";

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
      <Routes>
        <Route index element={<Home />} />
        <Route path="pokemon/:id" />
        <Route path="pokemon/:id/:info" />
      </Routes>
    </>
  );

  function newFunction() {}
}

export default App;
