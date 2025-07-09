import React, { useMemo } from "react";
import CartContext from "./CartContext";
import Homepage from "./Homepage";

export default function MyShop() {
  const cartInfo = useMemo(
    () => ({
      userId: 1,
      username: "God",
    }),
    []
  );
  return (
    <CartContext.Provider value={cartInfo}>
      <Homepage />
    </CartContext.Provider>
  );
}
