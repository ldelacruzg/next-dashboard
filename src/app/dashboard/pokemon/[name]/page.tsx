import { Metadata } from "next";
import Image from "next/image";

import { getPokemons, getPokemon } from "@/pokemons";

interface Props {
  params: {
    name: string;
  }
}

export async function generateStaticParams() {
  const pokemons = await getPokemons({ limit: 151 });
  const params151Pokemons = pokemons.map((pokemon) => ({ name: pokemon.name }));
  return params151Pokemons;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id, name } = await getPokemon(params.name);

  return {
    title: `#${id} - ${name}`,
    description: `Page pokemon ${name}`,
  }
}

export default async function PokemonPage({ params }: Props) {
  const pokemon = await getPokemon(params.name);

  return (
    <div className="flex flex-col items-center min-h-[100dvh] bg-background text-foreground">
      <div className="max-w-4xl w-full px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 py-8">
          <div className="flex-1">
            <Image
              src={pokemon.sprites.other!["official-artwork"].front_default}
              alt="Pokémon"
              width={300}
              height={300}
              className="w-full max-w-[300px] mx-auto md:mx-0 rounded-lg shadow-lg"
            />
          </div>
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">{pokemon.name}</h1>
            <div className="flex items-center gap-2">
              <div className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-sm font-medium">Fire</div>
              <div className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                Flying
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">HP</h3>
                <p className="text-lg font-bold">{pokemon.stats.find(p => p.stat.name === 'hp')?.base_stat}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">Attack</h3>
                <p className="text-lg font-bold">{pokemon.stats.find(p => p.stat.name === 'attack')?.base_stat}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">Defense</h3>
                <p className="text-lg font-bold">{pokemon.stats.find(p => p.stat.name === 'defense')?.base_stat}</p>
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium text-muted-foreground">Special Attack</h3>
                <p className="text-lg font-bold">{pokemon.stats.find(p => p.stat.name === 'special-attack')?.base_stat}</p>
              </div>
            </div>
            <p className="text-muted-foreground">
              {pokemon.moves.map(type => type.move.name).join(', ')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}