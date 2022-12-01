import React from 'react';
import { pokemonApi1 } from '../services/api1';
import {useState, useEffect} from "react"; 

const Home = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    pokemonApi1().then((result) => setData(result));
  }, []);

  console.log(data.data?.[0].id)


  return (
    <div>
      <h1 className="text-3xl font-bold underline">
      Welcome to the Pokemon App
      </h1>
      {data.data?.map(pokemon =>(
        <div key={pokemon.id} class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <a class="flex items-center justify-center" href="">
                <img class="rounded-t-lg " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name.english} />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{pokemon.name.english}</h5>
                </a>
                <a href={`/${pokemon.id}`} class=" flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Read more
                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </a>
            </div>
        </div>
      ) 
    )
  }
    </div>
  )
}

export default Home
