import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import "./pokemonInfo.css";
// /pokemon/:id/:info -> Super detailed view with only the names or the types and or the bases

const PokemonInfo = () => {
  const { id } = useParams();
 //const {info} = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(({ data }) => {
      setPokemon(data);
      console.log(data)

    });
  }, [id]);
   
    //console.log(pokemon)

  return (
    <div className='body'>
      <h1 className='text-8xl'>Pokemon Info</h1>
      
      {
        
        pokemon  ?
          
          <div className='container'>
          <img className="rounded-t-lg" width={150} height={90} src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name.english} />
          <div className='piccolo'>
         
          <h1 className='text-5xl'>{pokemon.species.name}</h1>

          <p>{pokemon.species.name} is a {pokemon.types[0].type.name} pokemon type.</p>
          <p>His height is  {pokemon.height} "cm or meter" and weighs approx {pokemon.weight} kg.</p>
      
        <h2>This pokemon start with a Base Experience of {pokemon.base_experience}.
        But let's check what are his strengths and weaknesses.</h2>
        <div className='container-ability'>
        <ul>
          <li>HP:{pokemon.stats[0].base_stat}</li>
          <li>ATTACK:{pokemon.stats[1].base_stat}</li>
          <li>DEFENSE:{pokemon.stats[2].base_stat}</li>
          <li>SPEED:{pokemon.stats[3].base_stat}</li>
        </ul>
        
          <ul>
          <li><h2>His known skills are:</h2></li>
            <li>{pokemon.abilities[0].ability.name}</li>
            <li>{pokemon.abilities[1].ability.name}</li>
          </ul>
        </div>
       
         
          </div>
        </div>

          :
          null
      }




    </div>
  )
}

export default PokemonInfo