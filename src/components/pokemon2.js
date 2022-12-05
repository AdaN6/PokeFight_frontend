import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Pokemon2() {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState();

  useEffect(() => {
    axios.get(`https://lalala.cyclic.app/pokemon/${id}`).then(({ data }) => {
      setPokemon(data);
    });
  }, [id]);
 
  if (!pokemon) return <h2>Loading...</h2>;

  return (
    <div className="card">
        <div className="pkmn__container" key={id}>
			<div className="pkmn__picture">
				<div className="pkmn__cp">#<span>{pokemon.id}</span></div>
				<img className="pkmn__png object-fill h-28" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`} alt={pokemon.name.english} />
				<div className="pkmn__exp-bar"></div>				
			</div>
			<div className="pkmn__info">
					<div className="pkmn__name">{pokemon.name.english}<p className="size-medium">Type: {pokemon.type}</p></div>
					<div className="pkmn__data">
						<div className="pkmn__type">{pokemon.base.Attack}<p className="text--small">Atack</p></div>
						<div className="pkmn__weight">{pokemon.base.Defense}<p className="text--small">Defense</p></div>
						<div className="pkmn__type">{pokemon.base.Speed}<p className="text--small">Speed</p></div>
						<div className="pkmn__height">{pokemon.base.HP}<p className="text--small">HP</p></div>
				    </div>
			<div className="pkmn__move space">
				<div>Sp Attack<p className="move--mtop">Sp Attack</p></div>
				<div>40</div>
			</div>
			    <div className="pkmn__move">
					<div className=" move__special">Sp Defense<p className="move--mtop">Sp Defense</p></div>
					<div className="">150</div>
				</div>
			</div>
        </div>
	</div>
  );
}
export default Pokemon2