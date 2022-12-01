import axios from "axios";

const pokeApi2Url = "https://pokeapi.co/api/v2/pokemon/";

export const pokemonApi2 = async () => {
   try {
     const result = await axios(pokeApi2Url).then((data) => data);
     if (!result)
       throw new Error(`Fail to get datas with a status of ${result.status}`);
       
     return result;
   } catch (error) {
     console.warn(error);
   }
}

// pokemonApi2()