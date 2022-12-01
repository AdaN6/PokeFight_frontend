import { Routes, Route } from "react-router-dom";
import {useState, useEffect} from "react"; 
import Home from "./components/home.js";
import { pokemonApi1 } from "./services/api1.js";

function App() {
  const [data, setData] = useState({});


  useEffect(() => {
    pokemonApi1().then((result) => setData(result));
  }, []);

  // console.log(data);
  console.log(data.data?.[0].id);


  //data.data[0].id

  // only for testing
  // const pokeApiUrl = "https://lalala.cyclic.app/pokemon";
  // const pokemonApi1 = async () => {
  //   try {
  //     const result = await axios(pokeApiUrl).then((data) => data);
  //     if (!result)
  //       throw new Error(
  //         `Fail to get datas with a status of ${result.status}`
  //       );
  //     console.log(result);
  //     return result;
  //   } catch (error) {
  //     console.warn(error);
  //   }
  // };

  // pokemonApi1();
  // console.log(
  //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonApi1.data[1].id}.png`
  // );
  // const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonApi1.id}.png`;

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
