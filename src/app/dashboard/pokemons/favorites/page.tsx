import { FavoritePokemonsGrid } from "@/pokemons";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Favorite Pokemons",
  description: "List of all favorites pokemons"
}

export default function FavoritePokemonsPage() {
  return (
    <div className="flex flex-col p-4">
      <h1 className="text-4xl">Favorite Pokemons</h1>
      <FavoritePokemonsGrid />
    </div>
  );
}