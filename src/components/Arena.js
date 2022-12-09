import React from 'react';
import { useEffect, useState } from "react";
import { pokemonApi1 } from '../services/api1';
import  Play  from "./Play";

const Arena = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const [startGame, setStartGame]=useState(false);

  useEffect(() => {
    const getPokemons = async () => {
      await pokemonApi1().then(data => setData(prev => data ));
      setLoading(prev => !prev);
    };
    getPokemons();
    
  }, []);


  if (data) {
    //giconsole.log( ...data);
  }


  return (
    <>
      {
        loading ?
          <p>loading...</p>
          :
          <div className='bg-yellow-500'>
            <div className="flex justify-center">
              <img src="http://2.bp.blogspot.com/-j_GR1Tq5tP0/VbY3ueWy4qI/AAAAAAAAIvE/wCjca8TaU6g/s1600/Logo%2BPokemon.png" className="items-center w-auto h-60 " alt="Flowbite Logo" />
            </div>
            <div className='text-center text-8xl'>
              <h1>Battle Arena</h1>
              <button onClick={()=>setStartGame(true)} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Start</button>
              {startGame ? 
              <Play data={data}/>
              :
              null}
            </div>
          </div>
      }
    </>

  )
}

export default Arena