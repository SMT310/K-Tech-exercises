import React, { useCallback, useEffect, useState } from "react";

const ChildComponent = ({ loggingStatus }: { loggingStatus: any }) => {
  useEffect(() => {
    loggingStatus();
  }, [loggingStatus]);

  return <div />;
};
export default function MyShop4() {
  const [count, setCount] = useState(0);
  const loggingStatus = useCallback(() => {
    console.log("Run from ChildComponent");
  }, []);
  const addMore = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <>
      <h2>Count: {count}</h2>
      <ChildComponent loggingStatus={loggingStatus} />
      <button onClick={() => addMore()}>Add more</button>
    </>
  );
}
