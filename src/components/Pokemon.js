
// /  pokemon/:id -> Detailed view with the name, type and base 

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Pokemon() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`https://lalala.cyclic.app/pokemon/${id}`).then(({ data }) => {
      setPokemon(data);
    });
  }, [id]);


  if (!pokemon) return <h2>Loading...</h2>;


  return (
    <>
      <div class="flex justify-center" key={id}>
        <div key={pokemon.id} className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
             <a className="flex items-center justify-center" href="">
                 <img className="rounded-t-lg " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name.english} />
            </a>
             <div className="p-5">
                 <a href="#">
                     <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{pokemon.name.english}</h5>
                 </a>
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Type: {pokemon.type}</p>
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">HP: {pokemon.base.HP}</p>
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Attack: {pokemon.base.Attack}</p>
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Defense: {pokemon.base.Defense}</p>
                 <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">Speed: {pokemon.base.Speed}</p>
                 <a href={`/pokemon/:id/:info`} className=" flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                     Read more
                     <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                 </a>
            </div>
         </div>
      </div>
    </>
  );
}


export default Pokemon