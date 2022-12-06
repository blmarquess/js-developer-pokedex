import Pokemon from "./pokemon-model.mjs";

function convertPokeApiDetailToPokemon(pokeDetail) {
  const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name);
  const photo = pokeDetail.sprites.other.dream_world.front_default;
  return new Pokemon(pokeDetail.id, pokeDetail.name, types[0], types, photo);
}

const getPokemonDetail = async (pokemon) => {
  const response = await fetch(pokemon.url).then((response) => response.json());
  return convertPokeApiDetailToPokemon(response);
};

const getPokemons = async (offset = 0, limit = 5) => {
  const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

  const response = await fetch(url);
  const { results } = await response.json();
  const detailRequests = await Promise.all(results?.map(getPokemonDetail));
  return detailRequests;
};

const pokeApi = { getPokemonDetail, getPokemons };

export default pokeApi;
