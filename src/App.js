import { Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import axios from "axios";

function App() {
//only for testing
const pokeApiUrl = "https://lalala.cyclic.app/pokemon";

const pokemonApi2 = async () => {
  const result = await axios.get(pokeApiUrl).then((data) => data);
console.log(result)
  return result;
};

pokemonApi2()

  return (
    <>
        <Routes>
            <Route index element={<Home />} />
            <Route path="pokemon/:id" />
            <Route path="pokemon/:id/:info" />
        </Routes>
        
    </>
  );
}

export default App;
