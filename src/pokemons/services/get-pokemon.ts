import { notFound } from "next/navigation";
import { GetPokemonResponse } from "../interfaces/get-pokemon.response";

/**
 * Get a pokemon by name or id
 * @param queryPokemon Is the name or id of the pokemon
 * @returns Return the pokemon response
 */
export const getPokemon = async (queryPokemon: string) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${queryPokemon}`, {
      next: {
        revalidate: 60 * 60 * 30 * 6,
      }
    });

    const pokemon: GetPokemonResponse = await response.json();

    return pokemon;
  } catch (error) {
    console.log(error);
    notFound();
  }
}