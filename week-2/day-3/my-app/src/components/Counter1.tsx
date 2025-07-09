import React, { useState } from "react";

export default function Counter1() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Count: {count}</h2>
      <div className="pr-2 border text-lg bg-red-200">
        <button
          onClick={() => {
            setCount(0);
          }}
        >
          Reset
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount + 1);
          }}
        >
          Increase
        </button>
        <button
          onClick={() => {
            setCount((prevCount) => prevCount - 1);
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}
