import { StateCreator, create } from 'zustand'
import { devtools } from 'zustand/middleware';

interface State {
  count: number;
  isReady: boolean;
}

interface Actions {
  inc: () => void;
  dec: () => void;
  setInitialCount: (count: number) => void;
}

type CounterStore = State & Actions;

const initializer: StateCreator<CounterStore> = (set) => ({
  count: 1,
  isReady: false,
  setInitialCount: (count: number) => set(state => {
    if (state.isReady) return state;
    return { count, isReady: true };
  }),
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => {
    const newValue = state.count - 1;
    if (newValue < 0) return state;
    return { count: newValue };
  }),
})

export const useCounterStore = create<CounterStore>()(
  devtools(initializer)
)
