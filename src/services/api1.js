import axios from "axios";

// not working yet due to cors ?!?!

const pokeApiUrl = "https://lalala.cyclic.app/pokemon";

export const pokemonApi2 = async () => {
  const result = await axios.get(pokeApiUrl).then((data) => data);

  return result;
};
