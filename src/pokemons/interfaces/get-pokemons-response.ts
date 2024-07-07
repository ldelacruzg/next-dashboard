export interface GetPokemonsResponse {
  count: number;
  next: string;
  previous: null;
  results: GetPokemonsResult[];
}

interface GetPokemonsResult {
  name: string;
  url: string;
}