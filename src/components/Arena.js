import React from 'react';
import axios from "axios";
import { useEffect, useState } from "react";



const Arena = () => {
  
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`https://lalala.cyclic.app/pokemon/`).then(({ data }) => {
      setPokemon(data);
    });
  }, []);
 
  if (!pokemon) return <h2>Loading...</h2>;
  console.log(pokemon[0].base)

  return (
    <div className='bg-yellow-500 arena-container'>
      <div className=' w-screen h-screen'>
        <div className='flex text-center justify-center text-white text-8xl'>
          <img src="http://2.bp.blogspot.com/-j_GR1Tq5tP0/VbY3ueWy4qI/AAAAAAAAIvE/wCjca8TaU6g/s1600/Logo%2BPokemon.png" className="items-center w-auto h-48 " alt="Flowbite Logo" />
      </div>
      <div className='flex justify-around'>
         {/* 1 pokemon card */}
      <div className="card">
        <div className="pkmn__container" >
			<div className="pkmn__picture">
				<div className="pkmn__cp">#<span>{pokemon[10].id}</span></div>
				<img className="pkmn__png object-fill h-28" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon[10].id}.svg`} alt={pokemon[10].name.english} />
				<div className="pkmn__exp-bar"></div>				
			</div>
			<div className="pkmn__info">
					<div className="pkmn__name">{pokemon[10].name.english}<p className="size-medium">Type: {pokemon[10].type[0]} {pokemon[10].type[1]}</p></div>
					<div className="pkmn__data">
						<div className="pkmn__type">{pokemon[10].base.Attack}<p className="text--small">Atack</p></div>
						<div className="pkmn__weight">{pokemon[10].base.Defense}<p className="text--small">Defense</p></div>
						<div className="pkmn__type">{pokemon[10].base.Speed}<p className="text--small">Speed</p></div>
						<div className="pkmn__height">{pokemon[10].base.HP}<p className="text--small">HP</p></div>
				    </div>
			<div className="pkmn__move space">
				<div>Sp Attack<p className="move--mtop">Sp Attack</p></div>
				<div>{pokemon[10].base['Sp. Attack']}</div>
			</div>
			    <div className="pkmn__move">
					<div className=" move__special">Sp Defense<p className="move--mtop">Sp Defense</p></div>
					<div className="">{pokemon[10].base['Sp. Defense']}</div>
				</div>
			</div>
        </div>
    </div>
     {/* 2 pokemon card */}
    <div className="card">
        <div className="pkmn__container" >
			<div className="pkmn__picture">
				<div className="pkmn__cp">#<span>{pokemon[201].id}</span></div>
				<img className="pkmn__png object-fill h-28" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon[201].id}.svg`} alt={pokemon[201].name.english} />
				<div className="pkmn__exp-bar"></div>				
			</div>
			<div className="pkmn__info">
					<div className="pkmn__name">{pokemon[201].name.english}<p className="size-medium">Type: {pokemon[201].type[0]} {pokemon[201].type[1]}</p></div>
					<div className="pkmn__data">
						<div className="pkmn__type">{pokemon[201].base.Attack}<p className="text--small">Atack</p></div>
						<div className="pkmn__weight">{pokemon[201].base.Defense}<p className="text--small">Defense</p></div>
						<div className="pkmn__type">{pokemon[201].base.Speed}<p className="text--small">Speed</p></div>
						<div className="pkmn__height">{pokemon[201].base.HP}<p className="text--small">HP</p></div>
				    </div>
			<div className="pkmn__move space">
				<div>Sp Attack<p className="move--mtop">Sp Attack</p></div>
				<div>{pokemon[201].base['Sp. Attack']}</div>
			</div>
			    <div className="pkmn__move">
					<div className=" move__special">Sp Defense<p className="move--mtop">Sp Defense</p></div>
					<div className="">{pokemon[201].base['Sp. Defense']}</div>
				</div>
			</div>
        </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Arena