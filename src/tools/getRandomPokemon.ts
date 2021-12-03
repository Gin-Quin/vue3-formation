import { Pokemon } from "../types/Pokemon";

const totalPokemonsCount = 800;

/**
 * This function returns one random pokemon
 * It is asynchronous (async) because it uses the "await" keyword
 */
export async function getRandomPokemon() {
  // we calculate a random id between '0' and 'totalPokemonsCount'
  const pokemonId = Math.floor(Math.random() * totalPokemonsCount);

  // we fetch the api to get a pokemon with this random id
  const response = await fetch(
    "https://pokeapi.co/api/v2/pokemon/" + pokemonId
  );

  // we transform the json into a javascript variable
  const data = await response.json();

  // we return the data and we indicate it is a pokemon
  return data as Pokemon;
}
