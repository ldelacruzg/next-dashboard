import Link from "next/link"
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { CiHeart } from "react-icons/ci";

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
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
              href={`/dashboard/pokemons/${pokemon.id}`}
              className="border rounded-full py-2 px-4 text-xs font-semibold text-gray-100"
            >
              More info...
            </Link>
          </div>
        </div>
      </div>
      <div className="border-b">
        <Link className="flex p-2" href="/dashboard/main" >
          <div className="text-green-600">
            <CiHeart className="text-red-600" size={25} />
          </div>
          <div className="pl-3">
            <p className="text-sm font-medium text-gray-800 leading-none">
              It&rsquo;s not favorite
            </p>
            <p className="text-xs text-gray-500">View your campaigns</p>
          </div>
        </Link>
      </div>
    </div>
  )
}