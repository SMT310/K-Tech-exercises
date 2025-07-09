import React, { useMemo, useState } from "react";

const ChildComponent = ({ text }: { text: string }) => {
  console.log("Rendered again!");
  return <>{text}</>;
};

export default function MyShop3() {
  const [text, setText] = useState("Hello!");

  const MemoizedComponent = useMemo(() => <ChildComponent text={text} />, [text]);
  return (
    <>
      <button
        className="bg-sky-500 hover:bg-sky-700 mr-4"
        onClick={() => setText("Hello!")}
      >
        Hello!
      </button>
      <button
        className="bg-sky-500 hover:bg-sky-700 mr-4"
        onClick={() => setText("Hola!")}
      >
        Hola!
      </button>
      {MemoizedComponent}
    </>
  );
}
