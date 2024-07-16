'use client';

import { useCounterStore } from "@/store";
import { useEffect } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const counter = useCounterStore(state => state.count)
  const increment = useCounterStore(state => state.inc)
  const decrement = useCounterStore(state => state.dec)
  const initCounter = useCounterStore(state => state.setInitialCount)

  useEffect(() => {
    initCounter(value);
  }, [value, initCounter])

  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="rounded-xl bg-gray-900 p-4 text-white hover:bg-gray-600 transition-all duration-200">
          -1
        </button>
        <button
          onClick={increment}
          className="rounded-xl bg-gray-900 p-4 text-white hover:bg-gray-600 transition-all duration-200">
          +1
        </button>
      </div>
    </>
  )
}