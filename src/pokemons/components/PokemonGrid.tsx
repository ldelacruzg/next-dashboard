'use client';

import { usePokemonsStore } from "@/stores/pokemons/pokemons.store";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import { PokemonCard } from "./PokemonCard";
import { useEffect } from "react";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  useEffect(() => {
    usePokemonsStore.persist.rehydrate();
  }, [])

  return (
    <div className="flex flex-wrap gap-4">
      {
        pokemons.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </div>
  )
}