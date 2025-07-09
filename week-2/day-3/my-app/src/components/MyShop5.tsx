import React from "react";
import UseWindowSize from "../Hooks/UseWindowSize";

export default function MyShop5() {
  const { width, height } = UseWindowSize();
  return (
    <>
      <h2>Window width: {width}</h2>
      <h2>Window height: {height}</h2>
    </>
  );
}
