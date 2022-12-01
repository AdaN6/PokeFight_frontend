import { Routes, Route } from "react-router-dom";
import Home from "./components/home.js";
import axios from "axios";

function App() {
//only for testing
const pokeApiUrl = "https://lalala.cyclic.app/pokemon";
const pokemonApi2 = async () => {
 try { 
  
  const result = await axios.get(pokeApiUrl).then((data) => data);
if (!result) 
  throw new Error (`Fail to get datas with a status of ${result.request.status}`);
console.log(result)
return result;

} catch (error) {
    console.warn(error);
  }
}
pokemonApi2();

  return (
    <>
        <Routes>
            <Route index element={<Home />} />
            <Route path="pokemon/:id" />
            <Route path="pokemon/:id/:info" />
        </Routes>
        
    </>
  );

  function newFunction() {
    ;
  }
}

export default App;
