'use client';

import { usePokemonsStore } from "@/stores/pokemons/pokemons.store";
import { PokemonGrid } from "./PokemonGrid";
import { useState } from "react";
import { FavoritePokemonsEmpty } from "./FavoritePokemonsEmpty";

export const FavoritePokemonsGrid = () => {
  const pokemons = usePokemonsStore(state => state.getPokemons());
  const [pokemonList, _] = useState(pokemons)

  return (
    <>
      {
        pokemonList.length === 0
          ? (<FavoritePokemonsEmpty />)
          : (<PokemonGrid pokemons={pokemonList} />)
      }
    </>
  )
}