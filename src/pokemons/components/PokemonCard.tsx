'use client';

import Link from "next/link"
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { usePokemonsStore } from "@/stores/pokemons/pokemons.store";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const isFavorite = usePokemonsStore((state) => state.isFavorite(pokemon.id));
  const toggleFavorite = usePokemonsStore((state) => state.toggleFavorite);

  const onToggleFavorite = () => {
    toggleFavorite(pokemon);
  }

  return (
    <div className="mx-auto right-0 mt-2 w-60">
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <div className="flex flex-col items-center justify-center text-center p-6 bg-gray-800 border-b">
          <Image
            priority={false}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={0}
            height={0}
            alt="Pokemon image"
            style={{ width: 100, height: 100 }}
          />
          <p className="pt-2 text-lg font-semibold text-gray-50">{pokemon.name}</p>
          <div className="mt-5">
            <Link
              prefetch={true}
              href={`/dashboard/pokemon/${pokemon.name}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info...
            </Link>
          </div>
        </div>
      </div>
      <div onClick={onToggleFavorite} className="border-b cursor-pointer">
        <div className="flex p-2">
          <div className="text-red-600">
            {
              isFavorite
                ? <IoHeart size={25} />
                : <IoHeartOutline size={25} />
            }
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              {
                isFavorite
                  ? "It's a favorite"
                  : "It's not favorite"
              }
            </p>
            <p className="text-xs text-gray-500">Click for change</p>
          </div>
        </div>
      </div>
    </div>
  )
}