'use client';

import { useState } from "react";

interface Props {
  value?: number;
}

export const CartCounter = ({ value = 0 }: Props) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <span className="text-9xl">{counter}</span>
      <div className="flex gap-2">
        <button
          onClick={() => setCounter(counter - 1)}
          className="rounded-xl bg-gray-900 p-4 text-white hover:bg-gray-600 transition-all duration-200">
          -1
        </button>
        <button
          onClick={() => setCounter(counter + 1)}
          className="rounded-xl bg-gray-900 p-4 text-white hover:bg-gray-600 transition-all duration-200">
          +1
        </button>
      </div>
    </>
  )
}