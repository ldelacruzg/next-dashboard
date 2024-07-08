import { getPokemons, PokemonGrid } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pokemons",
  description: "List of all pokemons"
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons({ limit: 151 });
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-4xl">Pokemons</h1>
      <PokemonGrid pokemons={pokemons} />
    </div>
  );
}