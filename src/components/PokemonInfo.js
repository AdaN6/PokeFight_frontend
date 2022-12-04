import React, {useEffect,useState} from 'react';
//import { useParams } from "react-router-dom";
// /pokemon/:id/:info -> Super detailed view with only the names or the types and or the bases

const PokemonInfo = () => {
  const [pokemonLink, setPokemonLink] = useState({});
  const [info, setInfo] = useState()
  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/`)
    .then(( response ) => response.json())
       .then((data)=> setPokemonLink(data.results[0].url))
  
    console.log(pokemonLink)
    fetch(pokemonLink)
    .then((response)=> response.json()) 
    .then((data)=>setInfo(data))
  }, [pokemonLink]);

  console.log(info)
  return (
    <div className='text-center'>
      PokemonInfo
      {
        info ?
       
        <> 
        <p>Name: {info.forms[0].name}</p>
        <p>Height: {info.height}</p>
        <p>Weight: {info.weight}</p>
        <p>Ability: {info.abilities[0].ability.name}</p>
        <p>{info.abilities[1].ability.name}</p>
        <p>Base Expirience: {info.base_experience}</p>
        </>
       :
        null
      }
     
  

  
    </div>
  )
}

export default PokemonInfo