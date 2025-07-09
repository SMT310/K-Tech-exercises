import React, { useEffect, useState } from "react";

export default function Counter2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("watch here");
    window.document.title = "Count - " + count;
  });
  return (
    <>
      <h2 className="text-lg font-bold underline text-red-500">
        Click button to increase count
      </h2>
      <button
        className="border bg-blue-500 hover:bg-sky-700 p-2 mt-4"
        onClick={() => setCount(count + 1)}
      >
        Increase
      </button>
    </>
  );
}
