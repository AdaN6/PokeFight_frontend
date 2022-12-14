import axios from "axios";

// const pokeApiUrl = "https://lalala.cyclic.app/pokemon";

// export const pokemonApi2 = async () => {
//   const result = await axios.get(pokeApiUrl).then((data) => data);

//   return result;
// };


const pokeApiUrl = "https://lalala.cyclic.app/pokemon";
export const pokemonApi1 = async () => {
  try {
    const result = await axios(pokeApiUrl).then((data) => data);
    if (!result)
      throw new Error(
        `Fail to get datas with a status of ${result.status}`
      );
    // console.log(result);
    return result;
  } catch (error) {
    console.warn(error);
  }
};

pokemonApi1();

// const imageURL = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${POKEMONINDEX}.png`
