import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";

import Card from './Card';


const Arena = () => {
  
  const [pokemon, setPokemon] = useState();
  const [startGame, setStartGame] = useState(false);
  const [player1, setPlayer1] = useState();
  const [player2, setPlayer2] = useState(); 

  const getRandomPokemon = () => {
    const random = Math.floor(Math.random() * 648);
    const radomPokemon = pokemon[random];
    return radomPokemon
  } 

  useEffect(() => {
    axios.get(`https://lalala.cyclic.app/pokemon/`).then(({ data }) => {
      setPokemon(data);
      
    });
  }, []);

  useEffect(() => {
    if (player1 && player2) {
      if (player1.base.HP > player2.base.HP) {
        setTimeout(() => {
          alert("Player one win!")
        },1000)
        
      } else if (player1.base.HP === player2.base.HP) {
        setTimeout(() => {
          alert("It's tie")
        },1000)
      } else if(player1.base.HP < player2.base.HP) {
        setTimeout(() => {
          alert("Player two win")
        },1000)
      }
}
},[player1,player2])

  if (!pokemon) return <h2>Loading...</h2>;

  
  const battle =  async() => {
    const pokemon1 = await getRandomPokemon();
    const pokemon2 = await getRandomPokemon();
    setPlayer1(pokemon1);
    setPlayer2(pokemon2);
    setStartGame(true)
    }

  return (
    <div className='bg-yellow-500 arena-container'>
      {startGame ?
        <div className=' w-screen pb-8'>
        <div className='flex text-center justify-center text-white text-8xl'>
          <img src="http://2.bp.blogspot.com/-j_GR1Tq5tP0/VbY3ueWy4qI/AAAAAAAAIvE/wCjca8TaU6g/s1600/Logo%2BPokemon.png" className="items-center w-auto h-48 " alt="Flowbite Logo" />
        </div>
          <div className='flex justify-around'>
          {/* 1 pokemon card */}
          {
              startGame ?
                <>
                  <Card pokemon={player1} />  
                  <Card pokemon={player2} />
                </>
              
              :
             null
          }
          

        </div>
        
        <div className='flex justify-center'>
          <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={battle}>Try Again</button>
          </div>
        </div>
        :
        <div className=' w-screen h-screen'>
        <div className='flex text-center justify-center text-white text-8xl'>
          <img src="http://2.bp.blogspot.com/-j_GR1Tq5tP0/VbY3ueWy4qI/AAAAAAAAIvE/wCjca8TaU6g/s1600/Logo%2BPokemon.png" className="items-center w-auto h-48 " alt="Flowbite Logo" />
        </div>
          <div className='flex justify-around'>
         
  
          
        </div>
        
        <div className='flex justify-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={battle}>Random Battle</button>
          </div>
    </div>}
    </div>
  )}

export default Arena
