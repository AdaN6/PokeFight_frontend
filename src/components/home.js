import React from 'react';
import { pokemonApi1 } from '../services/api1';
import {useState, useEffect} from "react"; 

const Home = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    pokemonApi1().then((result) => setData(result));
  }, []);

  // console.log(data.data?.[0].id)
  return (
    <div className='bg-stone-500' >
      <div className="flex justify-center">
      <img src="http://2.bp.blogspot.com/-j_GR1Tq5tP0/VbY3ueWy4qI/AAAAAAAAIvE/wCjca8TaU6g/s1600/Logo%2BPokemon.png" className="items-center w-auto h-60 " alt="Flowbite Logo" />
      </div>
      <div className= "flex flex-wrap ">
        {data.data?.map(pokemon =>(
          <div key={pokemon.id} className=" flex-auto m-2 h-54 w-44 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
              <a className="flex items-center justify-center" href="">
                  <img className="rounded-t-lg " src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`} alt={pokemon.name.english} />
              </a>
              <div className="p-5">
                  <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">{pokemon.name.english}</h5>
                  </a>
                  <a href={`/pokemon/${pokemon.id}`} className=" flex justify-center items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Read more
                      <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
              </div>
          </div>
         )
       )
      }
  </div>
    </div>
  )
}

export default Home
