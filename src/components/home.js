import {useEffect, useState} from 'react'
import { pokemonApi1 } from "./services/api1.js";
import {pokemonLs} from "./pokemonLs.js";


const home = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    pokemonApi1().then((result) => setData(result));
  }, []);

  // const testing = data.data?.[0].id

  console.log(data.data?.[0].id);

  // console.log(data);
  // console.log(
  //   `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${testing}.png`
  // );

  

  return data.data?.map((resId) => <pokemonLs key={resId} resId={resId}/>);
}

export default home
