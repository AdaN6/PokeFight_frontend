import axios from "axios";

const pokeApi2Url = "https://pokeapi.co/api/v2/pokemon/";

export const pokemonApi2 = async () => {
    const result = await axios
    .get(pokeApi2Url)
    .then((data) => data);

    return result
}
