import Pokemon from "./pokemon-model.mjs";

const getPokemonDetail = async (pokemon) => {
  const response = await fetch(pokemon.url).then((response) => response.json());
  return new Pokemon(response);
};

const getPokemons = async (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  const { results } = await fetch(url).then((res) => res.json());
  const detailRequests = await Promise.all(results?.map(getPokemonDetail));
  console.log("🚀 -> detailRequests", detailRequests);
  return detailRequests;
};

const pokeApi = { getPokemonDetail, getPokemons };

export default pokeApi;
