import React from "react";
import useClock from "../hooks/useClock";

export default function Clock() {
  const currentTime = useClock();
  return (
    <div className="h-screen p-4 flex flex-col items-center justify-center">
      <div className="bg-blue-500 rounded-xl">
        <p className="text-2xl font-medium text-black m-2">{currentTime}</p>
      </div>
    </div>
  );
}
