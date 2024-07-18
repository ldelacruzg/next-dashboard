import { SimplePokemon } from '@/pokemons';
import { StateCreator, create } from 'zustand'
import { devtools, persist } from 'zustand/middleware';
import { immer } from 'zustand/middleware/immer';

interface State {
  pokemons: Record<string, SimplePokemon>;
}

interface Actions {
  isFavorite: (id: string) => boolean;
  toggleFavorite: (pokemon: SimplePokemon) => void;
  getPokemons: () => SimplePokemon[];
}

type PokemonsStore = State & Actions;

const initialState: State = {
  pokemons: {}
}

const initializer: StateCreator<PokemonsStore, [["zustand/immer", never]]> = (set, get) => ({
  ...initialState,
  getPokemons: () => Object.values(get().pokemons),
  isFavorite: (id) => !!get().pokemons[id],
  toggleFavorite: (pokemon) => {
    set(state => {
      if (state.isFavorite(pokemon.id)) {
        delete state.pokemons[pokemon.id];
      } else {
        state.pokemons[pokemon.id] = pokemon;
      }
    })
  }
})

export const usePokemonsStore = create<PokemonsStore>()(
  devtools(
    persist(
      immer(initializer),
      { name: 'pokemons', skipHydration: true }
    ),
    { name: 'pokemons' }
  )
)
