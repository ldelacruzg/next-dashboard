import { GetPokemonsResponse, PokemonGrid, SimplePokemon } from "@/pokemons";

interface GetPokemonsOptions {
  limit?: number;
  offset?: number;
}

const getPokemons = async (options: GetPokemonsOptions): Promise<SimplePokemon[]> => {
  const { limit = 20, offset = 0 } = options
  try {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    const data: GetPokemonsResponse = await resp.json();

    const pokemons: SimplePokemon[] = data.results.map(pokemon => ({
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name
    }));

    return pokemons;
  } catch (error) {
    console.log(error);
    throw new Error("Error fetching pokemons");
  }
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