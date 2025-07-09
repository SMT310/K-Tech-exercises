import React, { useEffect, useState } from "react";

interface TimerState {
  seconds: number;
}
export default function Timer() {
  const [state, setState] = useState<TimerState>({ seconds: 10 });

  useEffect(() => {
    if (state.seconds <= 0) return alert("Time's up");

    const intervalId = setInterval(() => {
      setState((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [state.seconds]);
  return <p className='m-80'>Count down from {state.seconds}</p>;
}
