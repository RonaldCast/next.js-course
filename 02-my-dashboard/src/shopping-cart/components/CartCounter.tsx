"use client";
import { useState } from "react";

interface Props {
    value: number
}

export const CartCounter = ({value} : Props) => {
  const [counter, setCounter] = useState(value);
  return (
    <>
      <span className="text-9xl"> {counter} </span>
      <div className="flex gap-2">
        <button
          onClick={() => setCounter(counter == 0 ? 0 : counter - 1)}
          className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          -1
        </button>
        <button
          onClick={() => setCounter(counter + 1)}
          className="flex items-center justify-center rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
        >
          +1
        </button>
      </div>
    </>
  );
};
